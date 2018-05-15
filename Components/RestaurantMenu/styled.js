import styled from 'styled-components'


const Container = styled.div`
  ${({ theme }) => theme.media.whenDesktop(`
    padding: 0 20px;
  `)})
`

const Sections = styled.div`
  flex: 1;
  border: 1px transparent;
  box-shadow: 0 1px 1px 0 rgba(42,42,42,.4);
  margin: 20px 40px;
`
Sections.Panel = styled.div`
`

const SectionPanel = styled.div`
`
SectionPanel.Name = styled.h3`
  padding: 20px 0;
  background: #cece;
  margin: 5px 0;
`
SectionPanel.List = styled.div`
`

const MenuItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`
MenuItem.Name = styled.h4`
`
MenuItem.Description = styled.p`
`
MenuItem.Buy = styled.button`
  border-radius: 8px;
  border: 1px transparent;
  box-shadow: 0 2px 2px 0 rgba(42,42,42,.4);
  min-width: 80px;
`

export {
  Container,
  MenuItem,
  Sections,
  SectionPanel,
}
