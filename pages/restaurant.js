import React from 'react'
import { connect } from 'react-redux'
import Restaurant from '../Containers/Restaurant'
import RestaurantActions from '../Containers/Restaurant/restaurant.redux'

class RestaurantPage extends React.Component {
  render() {
    return (<Restaurant />)
  }

  static async getInitialProps({ query, ctx: { store } }) {
    const { id } = query
    console.log(`Restaurant id ${id}`)
    store.dispatch(RestaurantActions.restaurantFetch(id))
  }
}

export default connect()(RestaurantPage)
