import React from 'react'
import { injectGlobal } from 'styled-components'

const globals = injectGlobal`
  * {
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-width: 450px;
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
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  article {
    margin: 20px;
  }
  article p {
    margin: 10px 0;
  }
  button {
    align-items: center;
    background-color: #22BAD9;
    border: 0;
    color: white;
    cursor: pointer;
    display: flex;
    padding: 5px 7px;
    justify-content: center;
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
