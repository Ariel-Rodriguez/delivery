import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import DeliveryHeader from '../../Components/DeliveryHeader'


function Home({ restaurantList }) {
  return (
    <Fragment>
      <DeliveryHeader />
      <div>
        list of restaurants
        {restaurantList.map(restaurant => (<h1>{restaurant.title}</h1>) )}
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ home }) => home

export default connect(mapStateToProps)(Home)
