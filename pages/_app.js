import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import createStore from '../redux/store'
import withReduxSaga from 'next-redux-saga'
import Main from '../Components/Main'
import MainActions from '../Containers/Main/main.redux'

class Delivery extends App {
  static async getInitialProps({ Component, ctx }) {
    // Check if server needs to authenticate API for first time.
    // each subsequent partial page will be able to perform API calls.
    if (!ctx.store.api.isAuthenticated()) {
      await ctx.store.api.authenticate()
    }

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  componentDidMount() {
    // Warming up API.
    // trigger authenticate when starting application in client side for further API calls.
    this.props.store.dispatch(MainActions.authenticate())
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Main>
            <Component {...pageProps} />
          </Main>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(Delivery))
