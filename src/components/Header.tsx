import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Block, FlexBlock } from './shared/styled_UI';




function Header() {
  return (
    <Container>
      <FlexBlock justifyC>
        <StyledNavLink to='/'>WebAnt_ReactQuery</StyledNavLink>
        <Block gap='30px'>
          <StyledNavLink to='/location' >Локации</StyledNavLink>
          <StyledNavLink to='/episode'>Эпизоды</StyledNavLink>
          <StyledNavLink to='/character'>Персонажи</StyledNavLink>
        </Block>
      </FlexBlock>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #000;
  padding: 15px 30px;
`;


const StyledNavLink = styled(NavLink)`
  color: #fff;

  &:active {
    color: #a572f3;
  }
  &:hover {
    color: #a572f3;
  }
`