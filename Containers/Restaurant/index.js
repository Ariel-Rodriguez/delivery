
import React from 'react'
import { connect } from 'react-redux'

import RestaurantMenu from '../../Components/RestaurantMenu'
import { getRestaurantCardInformation } from './restaurant.redux'
import ActivityLoading from '../../Components/ActivityLoading'

function Restaurant({ buy, restaurant }) {
  if (restaurant.isLoading) return (<ActivityLoading />)

  return (
    <RestaurantMenu
      card={getRestaurantCardInformation(restaurant)}
      sections={restaurant.sections}
      onBuy={buy}
    />
  )
}

function mapDispatchToProps() {
  return {
    buy(id) {
      console.log(`Buy item: ${id}`)
    },
  }
}

const mapStateToProps = ({ restaurant }) => ({ restaurant })

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
