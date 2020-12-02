import AppLayout from "components/AppLayout"
import Button from "components/Button"
import useUser from "hooks/useUser"
import { useEffect, useState } from "react"

import { addDevit, uploadImage } from "firebase/client"
import { useRouter } from "next/router"
import Avatar from "components/Avatar"

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function ComposeDevit() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (task) {
      let onProgress = () => {}
      let onError = () => {}
      let onComplete = () => {
        console.log("onComplete")
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
      img: imgURL,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.error(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  // Drag drop
  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]

    const task = uploadImage(file)
    setTask(task)
  }

  // Disabled button - message is empty
  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout title="Crear un Devit | Devtter 🐦">
        <section className="form-container">
          {user && (
            <div className="avatar-container">
              <Avatar src={user.avatar} />
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="¿Qué esta pasando?"
              value={message}
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            ></textarea>
            {imgURL && (
              <section className="remove-img">
                <button onClick={() => setImgURL(null)}>x</button>
                <img url={imgURL} />
              </section>
            )}
            <div className="btn-container">
              <Button disabled={isButtonDisabled}>Devittear</Button>
            </div>
          </form>
        </section>
      </AppLayout>
      <style jsx>{`
        .form-container {
          display: flex;
          align-items: flex-start;
        }
        form {
          padding: 1rem;
        }
        textarea {
          width: 100%;
          font-size: 2.1rem;
          padding: 1.5rem;
          resize: none;
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? "3px dashed #09f"
            : "3px solid transparent"};
          border-radius: 1rem;
          outline: 0;
          min-height: 20rem;
        }

        .remove-img {
          position: relative;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 1rem;
        }
        button {
          position: absolute;
          right: 15px;
          top: 15px;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 999px;
          border: none;
          width: 36px;
          height: 36px;
          color: white;
          font-size: 24px;
        }
        .avatar-container {
          padding-top: 2rem;
          padding-left: 1rem;
        }
        .btn-container {
          padding: 1.5rem;
        }
      `}</style>
    </>
  )
}
