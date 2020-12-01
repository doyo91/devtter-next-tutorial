import Avatar from "components/Avatar"

export default function Devit({
  avatar,
  userName,
  content,
  id,
  userId,
  createdAt,
}) {
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
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
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
        `}
      </style>
    </>
  )
}
