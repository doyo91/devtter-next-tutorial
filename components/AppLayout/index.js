import Head from "next/head"
import styles, { globalStyles } from "./styles"

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Devtter 🐦</title>
      </Head>
      <div>
        <main>{children}</main>
      </div>

      {/* component styles (scope) */}
      <style jsx>{styles}</style>
      {/* global styles */}
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
