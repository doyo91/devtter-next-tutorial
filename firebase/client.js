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

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user
  return { avatar: photoURL, username: displayName, email }
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
