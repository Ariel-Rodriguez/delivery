import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

import Header from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import RestaurantCard from '../../Components/RestaurantCard'

import HomeActions, { getRestaurantList, filteringDidChange } from './home.redux'
import { getRestaurantCardInformation } from '../Restaurant/restaurant.redux'

class Home extends Component {
  
  componentDidUpdate(prevProps) {
    const { sortBy, filterBy } = this.props.filtering
    // update uri with query filters
    if (filteringDidChange(prevProps, this.props.filtering)) {
      const href = `/?sortBy=${sortBy}&filterBy=${filterBy.join(',')}`
      const as = href
      Router.push(href, as, { shallow: true })
    }
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
  return {
    ...home,
    restaurantList: getRestaurantList(home),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectFilter(filters) {
      const filterBy = filters.map(f => f.value)
      dispatch(HomeActions.homeRestaurantListChangeFiltering({ filterBy }))
    },
    selectSort(sorting) {
      const sortBy = sorting.value
      dispatch(HomeActions.homeRestaurantListChangeFiltering({ sortBy }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
