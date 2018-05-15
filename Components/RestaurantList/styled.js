import styled from 'styled-components'


const Container = styled.div`
  ${({ theme }) => theme.media.whenDesktop(`
    padding: 0 20%;
  `)})
`
const Helpers = styled.div`
  display: flex;
  padding: 30px 0;
`
Helpers.Filters = styled.div`
  flex: 1;
`
Helpers.Sort = styled.div`
  flex: 1;
`

const List = styled.div`
  flex: 1;
`
List.Item = styled.div`
  border: 1px solid transparent;
  box-shadow: 0 1px 1px 0 rgba(42,42,42,.4);
`

export {
  Container,
  Helpers,
  List,
}
