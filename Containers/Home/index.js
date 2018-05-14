import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import DeliveryHeader from '../../Components/DeliveryHeader'


function Home({ restaurantList, Link }) {
  return (
    <Fragment>
      <DeliveryHeader />
      <div>
        list of restaurants
        {restaurantList.map(restaurant => (
          <div>
            <Link href={restaurant.id} name={restaurant.general.name}>
              <h1>{restaurant.general.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ home }) => home

export default connect(mapStateToProps)(Home)
