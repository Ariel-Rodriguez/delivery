import React from 'react'
import { Spinner, CubeA, CubeB } from './styled'


function ActivityLoading() {
  return (
    <Spinner>
      <CubeA />
      <CubeB />
    </Spinner>
  )
}

export default ActivityLoading
