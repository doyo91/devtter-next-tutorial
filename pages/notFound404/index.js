import Link from "next/link"

export default function PageNotFound() {
  return (
    <section>
      <section>
        <h1>ERROR!!</h1>
        <p>Página no encontrada, por favor vuelve a la home</p>
        <Link href="/home">
          <a>Volver a Home</a>
        </Link>
      </section>
    </section>
  )
}
