import Head from "next/head"
import styles, { globalStyles } from "components/AppLayout/styles"

export default function AppLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
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
