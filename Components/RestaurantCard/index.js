import React from 'react'

import {
  Container,
  Content,
  Location,
  Category,
  Header,
  Logo,
} from './styled'


function RestaurantCard({
  average,
  categories,
  city,
  logoUri,
  logoSize,
  name,
  streetName,
  streetNumber,
  zipcode,
}) {
  return (
    <Container>
      <Logo uri={logoUri} logoSize={logoSize} />
      <Content>
        <Header><Header.Title>{name}</Header.Title><Header.Rating>{average}</Header.Rating></Header>
        <Location>{`${streetName} ${streetNumber}, ${zipcode} ${city}`}</Location>
        <Category>{categories}</Category>
      </Content>
    </Container>
  )
}

export default RestaurantCard
