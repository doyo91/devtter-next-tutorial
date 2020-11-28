import Head from "next/head";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Devter 🐦</title>
      </Head>
      <main className="main">{children}</main>

      <style jsx global>{`
        html,
        body {
          font-size: 10px;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: #09f;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
