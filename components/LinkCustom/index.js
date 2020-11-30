import Link from "next/link"

export function LinkCustom({ path, children }) {
  return (
    <Link href={path}>
      <a>{children}</a>
    </Link>
  )
}
