import styled from 'styled-components';
import { ViewModeQueries, ViewModeWidth } from '../../helpers/viewModeHelper';

const ContainerStyled = styled.div`
  margin: 0 auto;

  ${ViewModeQueries.XL} {
    max-width: ${ViewModeWidth.XL};
    padding: 0 ${props => props.theme.spaces.s41} 0
      ${props => props.theme.spaces.s49};
  }
`;

export { ContainerStyled };
