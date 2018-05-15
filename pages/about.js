import React, { Fragment } from 'react'
import Header from '../Components/Header'

export default () => (
  <Fragment>
    <Header />
    <article>
      <h1>Ariel Rodriguez</h1>
      <p>
        This example was created using <b>NextJS</b> <a href="https://github.com/zeit/next.js/tree/canary/examples/with-redux-saga">create-next-app --example with-redux-saga</a>
      </p>
      <p>
        On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method, <a href="http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree">getDataFromTree</a>. This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.
      </p>
      <p>
        This example relies on <a href="http://graph.cool">graph.cool</a> for its GraphQL backend.
      </p>
    </article>
  </Fragment>
)
