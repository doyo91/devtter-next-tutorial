import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyARHdgI86tNa7C_CwdoTgwn_VBanTQdxJA",
  authDomain: "proyectos-next.firebaseapp.com",
  databaseURL: "https://proyectos-next.firebaseio.com",
  projectId: "proyectos-next",
  storageBucket: "proyectos-next.appspot.com",
  messagingSenderId: "294929050557",
  appId: "1:294929050557:web:1d9fa854cf256b6fe840d4",
  measurementId: "G-NXH6Z5LB0T",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

// Inicializar servicio de base de datos
const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return { avatar: photoURL, username: displayName, email, uid }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        )

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        }
      })
    })
}
