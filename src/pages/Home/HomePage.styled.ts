import styled from 'styled-components';

const SubTitle = styled.h4`
  margin: ${props => props.theme.spaces.s12} 0
    ${props => props.theme.spaces.s68};
`;

const NavCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 932px;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export { SubTitle, NavCardsWrapper };
