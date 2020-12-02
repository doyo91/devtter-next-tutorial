import AppLayout from "components/AppLayout"

export default function App({ Component, pageProps }) {
  return (
    <AppLayout title="Crear un Devit | Devtter 🐦">
      <Component {...pageProps} />
    </AppLayout>
  )
}
