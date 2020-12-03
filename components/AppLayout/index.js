import styles, { globalStyles } from "components/AppLayout/styles"

export default function AppLayout({ children }) {
  return (
    <>
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
