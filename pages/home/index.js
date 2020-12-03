import { useState, useEffect } from "react"
import Head from "next/head"
import Devit from "components/Devit"
import useUser from "hooks/useUser"
import { fetchLatestDevits } from "firebase/client"

import Navbar from "components/Navbar"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then((timeline) => setTimeline(timeline))
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio || Devtter 🐦</title>
      </Head>

      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(
          ({ id, userId, userName, avatar, content, createdAt, img }) => (
            <Devit
              key={id}
              userName={userName}
              avatar={avatar}
              content={content}
              id={id}
              img={img}
              userId={userId}
              createdAt={createdAt}
            />
          )
        )}
      </section>
      <Navbar />

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
            backdrop-filter: blur(5px);
          }

          h2 {
            font-weight: 800;
            font-size: 2.1rem;
            padding-left: 1.5rem;
          }
          section {
            flex: 1;
          }
        `}
      </style>
    </>
  )
}
