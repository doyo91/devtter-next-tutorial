import AppLayout from "components/AppLayout"
import Button from "components/Button"
import useUser from "hooks/useUser"
import { useState } from "react"

import { addDevit } from "firebase/client"

export default function ComposeDevit() {
  const user = useUser()
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
  }

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué esta pasando?"
            value={message}
            onChange={handleChange}
            name=""
            id=""
          ></textarea>
          <div>
            <Button disabled={!message.length}>Devittear</Button>
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
