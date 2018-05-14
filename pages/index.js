import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Home from '../Containers/Home'
import HomeActions from '../Containers/Home/home.redux'

class PageIndex extends React.Component {
  render () {
    return (<Home createRestaurantLink={this.createRestaurantLink}/>)
  }

  createRestaurantLink({ id, children}) {
    <Link href={`/restaurant?id=${id}`} as={`/restaurant/${id}`}>
     {children}
    </Link>
  }

  static async getInitialProps({ ctx: { store } }) {
    if (!store.getState().home.restaurantList.length) {
      store.dispatch(HomeActions.homeRestaurantListFetch())
    }
  }
}

export default connect()(PageIndex)
