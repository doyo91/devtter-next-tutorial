import Avatar from "components/Avatar"
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat.js"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Devit({
  avatar,
  userName,
  content,
  id,
  userId,
  img,
  createdAt,
}) {
  const timeago = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)
  const router = useRouter()

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return (
    <>
      <article key={id} onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} alt={userName + " avatar"} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <Link href={`/status/${id}`}>
              <a>
                <time title={createdAtFormated}>{timeago}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} />}
        </section>
      </article>
      <style jsx>
        {`
          article {
            padding: 1rem 1.5rem;
            display: flex;
            border: 1px solid #eee;
          }

          article:hover {
            background-color: #f5f8fa;
            cursor: pointer;
          }

          div {
            padding-right: 1rem;
          }

          p {
            margin: 0;
            line-height: 1.3;
          }

          a {
            color: #555;
            font-size: 14px;
          }
          a:hover {
            text-decoration: underline;
          }

          time {
            color: #555;
            font-size: 14px;
          }

          img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            margin-top: 1rem;
          }
        `}
      </style>
    </>
  )
}
