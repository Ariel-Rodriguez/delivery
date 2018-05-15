import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import RestaurantCard from '../../Components/RestaurantCard'

import HomeActions, { getRestaurantList } from './home.redux'
import { getRestaurantCardInformation } from '../Restaurant/restaurant.redux'

// THIS IS NOT GOOD CONTAINER, IT COULD BE OPTIMIZED TO A VIRTUALIZED LIST

class Home extends Component {
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
  return {
    ...home,
    restaurantList: getRestaurantList(home),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectFilter(filter) {
      dispatch(HomeActions.homeRestaurantListChangeFiltering({ filterBy: filter }))
    },
    selectSort(sort) {
      dispatch(HomeActions.homeRestaurantListChangeFiltering({ sortBy: sort.value }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
