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

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)

  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return {
      props,
    }
  }
  if (res) {
    // res.writeHead(404).end()
    res.writeHead(301, { Location: "/notFound404" }).end()
  }
}

// DevitPage.getInitialProps = (context) => {
//   const { query, res } = context
//   const { id } = query
//   return fetch(`http://localhost:3000/api/devits/${id}`).then((apiResponse) => {
//     if (apiResponse.ok) return apiResponse.json()
//     if (res) {
//       // res.writeHead(404).end()
//       res.writeHead(301, { Location: "/notFound404" }).end()
//     }
//   })
// }
