import React from 'react'
import { injectGlobal } from 'styled-components'

const globals = injectGlobal`
  * {
    font-family: "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  h1 {
    font-size: 1.5rem;
  }
  button {
    align-items: center;
    background-color: #22BAD9;
    border: 0;
    color: white;
    display: flex;
    padding: 5px 7px;
  }
  button:active {
    background-color: #1B9DB7;
    transition: background-color .3s
  }
  button:focus {
    outline: none;
  }
`

export default ({ children }) => (
  <main>
    {children}
  </main>
)
