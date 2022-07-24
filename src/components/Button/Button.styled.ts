import styled from 'styled-components';
import { ViewModeQueries } from '../../helpers/viewModeHelper';

type ButtonProps = {
  $type: 'primary' | 'secondary';
  $textSize: 'large' | 'small';
};

const ButtonStyled = styled.button<ButtonProps>`
  ${ViewModeQueries.XL} {
    padding: ${props => props.theme.spaces.s17}
      ${props =>
        props.$textSize === 'large'
          ? props.theme.spaces.s36
          : props.theme.spaces.s50};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.br4};
    color: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.button.primary.color
        : props.theme.colors.button.secondary.color};
    background-color: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.button.secondary.color
        : props.theme.colors.button.primary.color};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: ${props =>
        props.$type === 'secondary'
          ? props.theme.colors.button.primary.color
          : props.theme.colors.button.secondary.color};
      background-color: ${props =>
        props.$type === 'secondary'
          ? props.theme.colors.button.secondary.color
          : props.theme.colors.button.primary.color};
    }

    &:disabled {
      color: ${props => props.theme.colors.darkGrey};
      border: 2px solid ${props => props.theme.colors.darkGrey};
      background-color: ${props => props.theme.colors.white};
    }
  }
`;

export { ButtonStyled };
