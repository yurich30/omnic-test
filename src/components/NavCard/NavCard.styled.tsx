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
  padding: 20px 82px;
  border-radius: 0 0 ${props => props.theme.borderRadius.br20}
    ${props => props.theme.borderRadius.br20};
  text-transform: uppercase;
  border: none;
`;

export { NavCardWrapper, NavCardText };
