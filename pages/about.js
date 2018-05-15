import React, { Fragment } from 'react'
import Header from '../Components/Header'

export default () => (
  <Fragment>
    <Header />
    <article>
      <h1>The Test</h1>
      <p>
        This is a test about creating a simple web app in less than a week (actually it took 2 days with break sessions)
      </p>
      <p>
        The current boilerplate and structure folder is not mean for production. I just give a try with a new one from scratch, i was inspired thinking in Ignite boilerplate for React Native.
        As well i wanted to go full declarative way by creating styled components. It doesn't mean i am opposite to classnames nor to BEM convention.
        I couldn't get used to JSX-styles yet, but someday i will.
      </p>
      <p>
        I'll append this section with more information with illustrative and codehighlight, just to explain the boilerplate and for what wanted to aim.
      </p>
      <p>
        Long story short, backend loads isomorphic application (because app runs same code and shares state between back and front) in React.
        <ul>
          <li>It does initializes the pages. NextJS does good magic on behind about caching the pages.</li>
          <li>The application inits express server, initializes the API, creates an http server and hold for requests.</li>
          <li>Each fresh request will hit a route, that route initializes the React view, the initprop will wait until it authenticates the API against original servers (i created fixtures for Mocking API for development mode)</li>
          <li>The authentiation part will be cached so, subsequent request will be resolved faster that first one.</li>
          <li>The client renders full document with the app in an advanced state, it means, the application contains the first list of restaurants which was populated in server side.</li>
          <li>The client will run almost same process as backend, it will authenticate against original servers to fetch the restaurant information or next restaurant list.</li>
          <li>Filtering is done by redux and reselect on frontend. This is good but i think the next step would be to try with Apollo and GraphQL.</li>
        </ul>
      </p>
    </article>
    <p><b>Ariel Rodriguez</b> ariel.fdr@gmail.com</p>
  </Fragment>
)
