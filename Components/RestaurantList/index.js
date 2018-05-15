import React from 'react'
import SelectBox from '../SelectBox'

import {
  Container,
  Helpers,
  List,
} from './styled'


const RestaurantList = ({
  renderItem, restaurantList, selectFilter, selectSort, filters, sorts, sortingBy, filteringBy,
}) => (
  <Container>
    <Helpers>
      <Helpers.Filters>
        <SelectBox placeholder="Filter" value={filteringBy} options={filters} name="Filter" onChange={selectFilter} isMulti multi />
      </Helpers.Filters>
      <Helpers.Sort>
        <SelectBox placeholder="Sort" value={sortingBy} options={sorts} name="Sort" onChange={selectSort} />
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
