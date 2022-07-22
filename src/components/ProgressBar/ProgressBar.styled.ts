import styled from 'styled-components';

const ProgressBarStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 4px;
  background-color: ${props => props.theme.colors.grey};
`;

type ProgressBarStyledInnerProps = {
  progress: string;
};

const ProgressBarStyledInner = styled.div<ProgressBarStyledInnerProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: ${props => props.progress};
  background: ${props => props.theme.colors.gradient};
`;

export { ProgressBarStyled, ProgressBarStyledInner };
