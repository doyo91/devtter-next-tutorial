import Devit from "components/Devit"
import Navbar from "components/Navbar"
import Head from "next/head"

export default function DevitPage(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Devtter 🐦</title>
      </Head>
      <section>
        <Devit {...props} />
      </section>
      <Navbar />
      <style jsx>{`
        section {
          flex: 1;
        }
      `}</style>
    </>
  )
}

DevitPage.getInitialProps = (context) => {
  const { query, res } = context
  const { id } = query
  return fetch(`http://localhost:3000/api/devits/${id}`).then((apiResponse) => {
    if (apiResponse.ok) return apiResponse.json()
    if (res) {
      // res.writeHead(404).end()
      res.writeHead(301, { Location: "/notFound404" }).end()
    }
  })
}
