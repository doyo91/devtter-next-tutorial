import { Create, Home, Search } from "components/Icons"
import Link from "next/link"
import { colors } from "styles/theme"

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/home">
          <a>
            <Home stroke="#09f" width={32} height={32} />
          </a>
        </Link>
        <Link href="/compose/devit">
          <a>
            <Search stroke="#09f" width={32} height={32} />
          </a>
        </Link>
        <Link href="/compose/devit">
          <a>
            <Create stroke="#09f" width={32} height={32} />
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          nav {
            bottom: 0;
            position: sticky;
            height: 4.9rem;
            width: 100%;
            border-top: 1px solid #eee;
            background: #fff;
            display: flex;
          }

          nav a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            flex: 1 1 auto;
          }
          nav a:hover {
            background: radial-gradient(#0099ff11 15%, transparent 16%);
            background-size: 180px 180px;
            background-position: center;
          }

          nav a:hover > :global(svg) {
            stroke: ${colors.primary};
          }
        `}
      </style>
    </>
  )
}
