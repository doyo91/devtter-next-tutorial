import css from "styled-jsx/css"
import { fonts, colors, breakpoints } from "styles/theme"
import { addOpacityToColor } from "styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    font-size: 10px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 2.5rem 2.5rem;
    background-size: 5rem 5rem;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  p,
  span,
  strong {
    font-size: 1.6rem;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
      height: 90vh;
    }
  }
`
