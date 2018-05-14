import React from 'react'
import { connect } from 'react-redux'
import Restaurant from '../Containers/Restaurant'
import RestaurantActions from '../Containers/Restaurant/restaurant.redux'

class RestaurantPage extends React.Component {
  render() {
    return (<Restaurant id={this.props.id} />)
  }

  static async getInitialProps({ ctx: { query, store } }) {
    const { id } = query
    store.dispatch(RestaurantActions.restaurantFetch(id))
    return { id }
  }
}

export default connect()(RestaurantPage)
