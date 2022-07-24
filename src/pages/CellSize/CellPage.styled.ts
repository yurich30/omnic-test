import styled from 'styled-components';

type CellItemProps = {
  isActive: boolean;
};

const CellItemTitle = styled.h4`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
`;

const CellItem = styled.button<CellItemProps>`
  padding: ${props => props.theme.spaces.s12} ${props => props.theme.spaces.s16};
  background-color: ${props => props.theme.colors.white};
  border: ${props =>
    props.isActive
      ? `1px solid ${props.theme.colors.primary}`
      : `1px solid ${props.theme.colors.darkGrey}`};
  box-shadow: 0px 0px 6px rgba(85, 115, 133, 0.4);
  border-radius: ${props => props.theme.borderRadius.br4};

  &:disabled {
    border: 1px solid crimson;

    ${CellItemTitle} {
      color: ${props => props.theme.colors.darkGrey};
    }
  }
`;

const CellGrid = styled.div`
  margin: ${props => props.theme.spaces.s40} 0
    ${props => props.theme.spaces.s52};
  display: grid;
  grid-template-columns: 186px 240px 384px;
  grid-template-rows: 80px 40px 56px 132px;
  grid-gap: ${props => props.theme.spaces.s20};

  ${CellItem}:nth-child(2) {
    grid-row: 2/4;
  }

  ${CellItem}:nth-child(3) {
    grid-row: 4/5;
  }

  ${CellItem}:nth-child(5) {
    grid-row: 2/4;
  }

  ${CellItem}:nth-child(6) {
    grid-row: 4/5;
  }

  ${CellItem}:nth-child(7) {
    grid-row-start: span 2;
  }

  ${CellItem}:nth-child(8) {
    grid-row-start: span 2;
  }
`;

const CellItemImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
`;

const CellItemInfoWrapper = styled.div`
  width: 50%;
  text-align: start;
  flex-direction: column;
`;

const CellItemInner = styled.div`
  display: flex;
`;

const CellButtonsWrapper = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export {
  CellGrid,
  CellItem,
  CellItemInner,
  CellItemTitle,
  CellItemImageWrapper,
  CellItemInfoWrapper,
  CellButtonsWrapper,
};
