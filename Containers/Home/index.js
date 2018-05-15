import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import RestaurantCard from '../../Components/RestaurantCard'

import HomeActions from './home.redux'
import { getRestaurantCardInformation } from '../Restaurant/restaurant.redux'

class Home extends Component {
  state = {
    page: 1,
  }

  render() {
    return (
      <Fragment>
        <Header />
        <RestaurantList
          {...this.props}
          renderItem={this.renderRestaurantCard}
        />
      </Fragment>
    )
  }

  renderRestaurantCard = restaurant => {
    const { Link } = this.props
    const cardInformation = getRestaurantCardInformation({ ...restaurant, info: restaurant.general })
    return (
      <Link prefetch href={restaurant.id} name={cardInformation.name}>
        <RestaurantCard {...cardInformation} />
      </Link>
    )
  }
}

function mapStateToProps({ home }) {
  return home
}

function mapDispatchToProps(dispatch) {
  return {
    selectFilter(filter) {
      console.log('asdasd filter')
      dispatch(HomeActions.restaurantListChangeFilter(filter))
    },
    selectSort(sort) {
      dispatch(HomeActions.restaurantListChangeSort(sort))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
