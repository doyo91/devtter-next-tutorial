import AppLayout from "components/AppLayout"
import Button from "components/Button"
import GitHub from "components/Icons/GitHub"
import Logo from "components/Icons/Logo"
import { colors } from "styles/theme"

import { loginWithGithub } from "firebase/client"
import { useEffect } from "react"

import { useRouter } from "next/router"
import useUser, { USER_STATES } from "hooks/useUser"

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("./home")
  }, [user])

  const handleClick = () => {
    loginWithGithub().catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <AppLayout>
        <section>
          <Logo width="100" />
          <h1>Devtter</h1>
          <h2>Talk about development with developers 👨‍💻👩‍💻</h2>
          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOWN && <img src="/spinner.gif" />}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          place-content: center;
          place-items: center;
          height: 100%;
        }
        img {
          width: 12rem;
        }

        h1 {
          font-size: 3.2rem;
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 1.6rem;
        }

        h2 {
          font-size: 2.1rem;
          margin: 0;
          color: ${colors.secondary};
          max-width: 25rem;
        }

        div {
          margin-top: 1.6rem;
        }
      `}</style>
    </>
  )
}
