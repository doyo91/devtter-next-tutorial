import { useState, useEffect } from "react"
import AppLayout from "components/AppLayout"
import Devit from "components/Devit"
import useUser from "hooks/useUser"
import { fetchLatestDevits } from "firebase/client"
import { Home, Create, Search } from "components/Icons"
import Link from "next/link"
import { colors } from "styles/theme"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then((timeline) => setTimeline(timeline))
  }, [user])

  return (
    <>
      <AppLayout title="Inicio | Devtter 🐦">
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
        <nav>
          <Link href="/home">
            <a>
              <Home stroke="#09f" width={32} height={32} />
            </a>
          </Link>
          <Link href="/compose/devit">
            <a>
              <Search stroke="#09f" width={32} height={32} />
            </a>
          </Link>
          <Link href="/compose/devit">
            <a>
              <Create stroke="#09f" width={32} height={32} />
            </a>
          </Link>
        </nav>
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
          section {
            flex: 1;
          }

          nav {
            bottom: 0;
            position: sticky;
            height: 4.9rem;
            width: 100%;
            border-top: 1px solid #eee;
            background: #fff;
            display: flex;
          }

          nav a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            flex: 1 1 auto;
          }
          nav a:hover {
            background: radial-gradient(#0099ff11 15%, transparent 16%);
            background-size: 180px 180px;
            background-position: center;
          }

          nav a:hover > :global(svg) {
            stroke: ${colors.primary};
          }
        `}
      </style>
    </>
  )
}
