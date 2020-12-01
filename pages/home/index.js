import { useState, useEffect } from "react"
import AppLayout from "components/AppLayout"
import Devit from "components/Devit"
import useUser from "hooks/useUser"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user &&
      fetch("http://localhost:3000/api/statuses/home_timeline")
        .then((res) => res.json())
        .then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((devit) => (
            <Devit
              key={devit.id}
              username={devit.username}
              avatar={devit.avatar}
              message={devit.message}
              id={devit.id}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            height: 4.9rem;
            width: 100%;
            position: sticky;
            top: 0;
            border-bottom: 1px solid #eee;
            background-color: #ffffffee;
          }

          h2 {
            font-weight: 800;
            font-size: 2.1rem;
            padding-left: 1.5rem;
          }

          nav {
            bottom: 0;
            position: sticky;
            height: 4.9rem;
            width: 100%;
            border-top: 1px solid #eee;
            background: #fff;
          }
        `}
      </style>
    </>
  )
}
