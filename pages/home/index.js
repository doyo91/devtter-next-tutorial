import { useState, useEffect } from "react"
import AppLayout from "components/AppLayout"
import Devit from "components/Devit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

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
            height: 49px;
            width: 100%;
            position: sticky;
            border-bottom: 1px solid #ccc;
            padding: 0 1rem;
          }

          h2 {
            font.weight: 800;
            font-size: 2.2rem;
          }

          section {
            padding-top: 10rem;
          }

          nav {
            bottom: 0;
            position: fixed;
            height: 49px;
            width: 100%;
            border-top: 1px solid #ccc;
          }
        `}
      </style>
    </>
  )
}
