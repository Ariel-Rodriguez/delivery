import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  max-width: 700px;
  padding: 10px 20px;
`

const Content = styled.div`
  padding: 10px 20px;
  flex: 1;
  margin-left: 10px;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

Header.Title = styled.h2`
  font-size: 1.325em;
`

Header.Rating = styled.h4`
  color: #666;
`

const Location = styled.p`
  color: #666;
`
const Category = styled.p`
  color: #666;
`

const Logo = styled.div`
  background-image: url(${({ uri }) => uri});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  border: 1px transparent;
  border-radius: 5px;
  ${({ logoSize }) => (logoSize ? `
    width: ${logoSize.width}px;
    height: ${logoSize.height}px;
  ` : `
    width: 73px;
    height: 73px;
  `)}

`

export {
  Category,
  Container,
  Content,
  Location,

  Header,
  Logo,
}
