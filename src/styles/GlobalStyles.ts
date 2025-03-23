import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Подключение шрифтов */
  @font-face {
    font-display: swap;
    font-family: "Inter";
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Inter-Regular.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Inter";
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Inter-Medium.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Inter";
    font-stretch: normal;
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Inter-SemiBold.ttf") format("truetype");
  }

  @font-face {
    font-display: swap;
    font-family: "Inter";
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Inter-Bold.ttf") format("truetype");
  }

  :root {
    font-family: "Inter", sans-serif;
  }

  /* Обнуляющие стили */
  html, body, div, span, applet, object, button, input, textarea, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, 
  cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, 
  label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
  canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, 
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    vertical-align: baseline;
    box-sizing: border-box;
    background: transparent;
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  html {
    scroll-padding-top: 70px;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea, input {
    border: none;
    outline: none;
    box-shadow: none;
    resize: none;
  }

  .body-no-scroll {
    overflow: hidden;
  }

  .main {
    flex-grow: 1;
  }
`;
