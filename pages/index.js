import React from 'react'
import { connect } from 'react-redux';
import Home from '../Containers/Home'
import HomeActions from '../Containers/Home/home.redux'

class PageIndex extends React.Component {
  render () {
    return (<Home />)
  }

  static async getInitialProps({ ctx: { store } }) {
    if (!store.getState().home.restaurantList.length) {
      store.dispatch(HomeActions.homeRestaurantListFetch())
    }
  }
}

export default connect()(PageIndex)
