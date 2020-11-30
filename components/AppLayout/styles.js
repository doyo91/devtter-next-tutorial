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
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
      height: 90vh;
    }
  }
`
