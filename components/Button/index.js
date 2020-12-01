import { colors } from "styles/theme"

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: #fff;
          border-radius: 9999px;
          font-size: 1.6rem;
          font-weight: 800;
          padding: 1rem 2.4rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
          user-select: none;
        }

        button[disabled] {
          opacity: 0.2;
          pointer-events: none;
        }

        button > :global(svg) {
          margin-right: 0.8rem;
        }

        button button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
