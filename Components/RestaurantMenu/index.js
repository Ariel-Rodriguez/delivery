import React from 'react'
import RestaurantCard from '../RestaurantCard'
import Section from './Section'

import {
  Container,
  Sections,
} from './styled'


const RestaurantMenu = ({
  card, onBuy, sections,
}) => (
  <Container>
    <RestaurantCard logoSize={{ width: 180, height: 180 }} {...card} />
    <Sections>
      {sections.map(section => (
        <Sections.Panel key={section.id}>
          <Section onClick={onBuy} {...section} />
        </Sections.Panel>
      ))}
    </Sections>
  </Container>
)


export default RestaurantMenu
