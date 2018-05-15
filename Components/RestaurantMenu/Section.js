import React from 'react'

import {
  MenuItem,
  SectionPanel,
} from './styled'


const Section = ({
  id,
  name,
  items,
  onClick,
}) => (
  <SectionPanel>
    <SectionPanel.Name>{name}</SectionPanel.Name>
    <SectionPanel.List>
      {items.map(item => (
        <MenuItem key={item.id}>
          <MenuItem.Name>{item.name}</MenuItem.Name>
          <MenuItem.Description>{item.description}</MenuItem.Description>
          <MenuItem.Buy onClick={() => onClick(item.id)}>{item.price}</MenuItem.Buy>
        </MenuItem>
      ))}
    </SectionPanel.List>
  </SectionPanel>
)

Section.defaultProps = {
  items: [],
  onClick() {},
}

export default Section
