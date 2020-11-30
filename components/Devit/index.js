import Avatar from "components/Avatar"

export default function Devit({ avatar, username, message, id }) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={username + " avatar"} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>
        {`
          article {
            padding: 1rem 1.5rem;
            display: flex;
            border: 2px solid #eaf7ff;
          }

          div {
            padding-right: 1rem;
          }

          p {
            margin: 0;
            line-height: 1.3;
          }
        `}
      </style>
    </>
  )
}
