import AppLayout from "components/AppLayout"
import Button from "components/Button"
import useUser from "hooks/useUser"
import { useState } from "react"

import { addDevit } from "firebase/client"
import { useRouter } from "next/router"

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeDevit() {
  const user = useUser()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [message, setMessage] = useState("")
  const router = useRouter()

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
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.error(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout title="Crear un Devit | Devtter 🐦">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué esta pasando?"
            value={message}
            onChange={handleChange}
            name=""
            id=""
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devittear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        textarea {
          width: 100%;
          font-size: 2.1rem;
          padding: 1.5rem;
          resize: none;
          border: none;
          outline: 0;
          min-height: 20rem;
        }
        div {
          padding: 1rem;
        }
      `}</style>
    </>
  )
}
