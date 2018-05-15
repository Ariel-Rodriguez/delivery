import React from 'react'
import SelectBox from '../SelectBox'

import {
  Container,
  Helpers,
  List,
} from './styled'


const RestaurantList = ({
  renderItem, restaurantList, selectFilter, selectSort, filterValues, sortValues, sortSelected, filterSelected,
}) => (
  <Container>
    <Helpers>
      <Helpers.Filters>
        <SelectBox placeholder="Filter" value={filterSelected} options={filterValues} name="Filter" onChange={selectFilter} multi />
      </Helpers.Filters>
      <Helpers.Sort>
        <SelectBox placeholder="Sort" value={sortSelected} options={sortValues} name="Sort" onChange={selectSort} />
      </Helpers.Sort>
    </Helpers>
    <List>
      {restaurantList.map(restaurant => (
        <List.Item key={restaurant.id}>
          {renderItem(restaurant)}
        </List.Item>
      ))}
    </List>
  </Container>
)


export default RestaurantList
