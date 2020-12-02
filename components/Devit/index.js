import Avatar from "components/Avatar"
import useTimeAgo from "hooks/useTimeAgo"

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
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={userName + " avatar"} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> · </span>
            <date>{timeago}</date>
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

          div {
            padding-right: 1rem;
          }

          p {
            margin: 0;
            line-height: 1.3;
          }

          date {
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
