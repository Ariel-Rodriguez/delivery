import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: red;
  box-shadow: 0 1px 1px 0 rgba(42,42,42,.4);
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.whenDesktop(`
    padding: 0 20%;
  `)})
`
export const Logo = styled.a`
  background-image: url(https://www.deliveryhero.com/wp-content/themes/deliveryhero_corporate/img/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  padding: 25px;
  width: 135px;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px 0;
`
export const LinkItem = styled.a`
  border-radius: 18px;
  flex: 1;
  margin: 0 25px;
  padding: 10px;
  text-align: center;
  ${({ active }) => (active ? `
    color: red;
    background-color: white;
  ` : `
    cursor: pointer;
    color: white;
  `)}
`
