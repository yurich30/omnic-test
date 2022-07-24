import styled from 'styled-components';
import { Link, NavLinkProps } from 'react-router-dom';
import { ViewModeQueries } from '../../helpers/viewModeHelper';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav > a:first-child {
    margin-right: ${props => props.theme.spaces.s44};
  }

  ${ViewModeQueries.XL} {
    padding: ${props => props.theme.spaces.s29} 0
      ${props => props.theme.spaces.s18};
  }
`;

interface LinkStyledProps extends NavLinkProps {
  $type: 'primary' | 'secondary';
}

const LinkStyled = styled(Link)<LinkStyledProps>`
  text-decoration: none;
  text-transform: ${props => props.$type === 'secondary' && 'uppercase'};
  color: ${props =>
    props.$type === 'primary'
      ? props.theme.colors.link.primary.color
      : props.theme.colors.link.secondary.color};

  &:hover {
    color: ${props =>
      props.$type === 'secondary'
        ? props.theme.colors.link.primary.color
        : props.theme.colors.link.secondary.color};
  }

  ${ViewModeQueries.XL} {
    font-size: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.link.primary.fontSize
        : props.theme.colors.link.secondary.fontSize};
    line-height: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.link.primary.lineHeight
        : props.theme.colors.link.secondary.lineHeight};
    font-weight: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.link.primary.fontWeight
        : props.theme.colors.link.secondary.fontWeight};
    letter-spacing: ${props =>
      props.$type === 'secondary' &&
      props.theme.colors.link.secondary.letterSpacing};
  }
`;

export { HeaderContent, LinkStyled };
