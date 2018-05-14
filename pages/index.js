import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Home from '../Containers/Home'
import HomeActions from '../Containers/Home/home.redux'


class PageIndex extends React.Component {
  render() {
    return (<Home Link={PageIndex.restaurantLink} />)
  }

  static restaurantLink({ href, children }) {
    const props = {
      href: {
        pathname: '/restaurant',
        query: { id: href },
      },
      as: {
        pathname: `/restaurant/${href}`,
      },
    }
    return (
      <Link {...props}>{children}</Link>
    )
  }

  static async getInitialProps({ ctx: { store } }) {
    if (!store.getState().home.restaurantList.length) {
      store.dispatch(HomeActions.homeRestaurantListFetch())
    }
  }
}

export default connect()(PageIndex)
