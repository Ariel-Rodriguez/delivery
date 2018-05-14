
import React, { Fragment } from 'react'
import { connect } from 'react-redux'


function Restaurant({ id }) {
  return (
    <Fragment>
      <h1>{id}</h1>
    </Fragment>
  )
}

const mapStateToProps = ({ restaurant }) => restaurant

export default connect(mapStateToProps)(Restaurant)
