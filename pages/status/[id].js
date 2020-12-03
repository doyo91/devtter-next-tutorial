import Navbar from "components/Navbar"
import Head from "next/head"

export default function DevitPage() {
  return (
    <>
      <Head>
        <title>Devtter 🐦</title>
      </Head>
      <section>Devit con id</section>
      <Navbar />
      <style jsx>{`
        section {
          flex: 1;
        }
      `}</style>
    </>
  )
}
