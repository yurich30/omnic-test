import styled from 'styled-components';

const NavCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 436px;
`;

const NavCardText = styled.button`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: ${props => props.theme.spaces.s20} ${props => props.theme.spaces.s82};
  border-radius: 0 0 ${props => props.theme.borderRadius.br20}
    ${props => props.theme.borderRadius.br20};
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.white};
  }
`;

export { NavCardWrapper, NavCardText };
