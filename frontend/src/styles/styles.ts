import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    }

    html, body #root {
        height: 100%;
    }

    body {
        background: #E5E6F0;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: Roboto, sans-serif;
    }
`