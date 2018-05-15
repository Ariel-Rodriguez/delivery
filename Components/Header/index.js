import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Nav, StyledHeader, LinkItem, Logo } from './styled'

const AppHeader = ({ router: { pathname } }) => (
  <StyledHeader>
    <Logo href="/" />
    <Nav>
      <Link prefetch href="/">
        <LinkItem active={pathname === '/'}>Home</LinkItem>
      </Link>
      <Link prefetch href="/about">
        <LinkItem active={pathname === '/about'}>About</LinkItem>
      </Link>
    </Nav>
  </StyledHeader>
)

export default withRouter(AppHeader)
