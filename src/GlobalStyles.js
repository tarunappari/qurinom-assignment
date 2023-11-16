const { createGlobalStyle } = require("styled-components");


export let Globalstyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        transition: 0.1s;
     }
     :root {
  --white: #fff;
  --black: #111;
  --blue: #3a80e9;
  --grey: #888;
  --darkgrey: #1b1b1b;
  --green: #61c96f;
  --red: #f94141;
}

body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
  overflow-x: hidden;
  color: var(--white);
}

html {
  scroll-behavior: smooth;
}

::selection {
  background-color: var(--blue);
  color: var(--white);
}

::-webkit-scrollbar {
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: 10px;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

a {
  text-decoration: none;
  color: var(--white) !important;
}

`