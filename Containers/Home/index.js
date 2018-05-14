import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import DeliveryHeader from '../../Components/DeliveryHeader'


class Home extends Component {
  state = {
    page: 1,
  }

  render() {
    const { restaurantList, Link } = this.props
    return (
      <Fragment>
        <DeliveryHeader />
        <div>
          list of restaurants
          {restaurantList.map(restaurant => (
            <div key={restaurant.id}>
              <Link href={restaurant.id} name={restaurant.general.name}>
                <h1>{restaurant.general.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ home }) => home

export default connect(mapStateToProps)(Home)
