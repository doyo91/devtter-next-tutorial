import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GitHub from "../components/Icons/GitHub";
import { colors } from "../styles/theme";

import {
  loginWithGithub,
  onAuthStateChanged,
  signOut,
} from "../firebase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="logo" />
          <h1>Devtter</h1>
          <h2>Talk about development with developers 👨‍💻👩‍💻</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} alt="User avatar" />
                <strong>{user.username}</strong>
              </div>
            )}
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
          font-size: 2.4rem;
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 1.6rem;
        }

        h2 {
          font-size: 2.1rem;
          margin: 0;
          color: ${colors.primary};
          max-width: 25rem;
        }

        div {
          margin-top: 1.6rem;
        }
      `}</style>
    </>
  );
}
