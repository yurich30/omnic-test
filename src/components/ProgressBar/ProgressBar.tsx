import { FC } from 'react';
import {
  ProgressBarStyled,
  ProgressBarStyledInner,
} from './ProgressBar.styled';

interface ProgressBarProps {
  progress: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => (
  <ProgressBarStyled>
    <ProgressBarStyledInner progress={progress} />
  </ProgressBarStyled>
);

export default ProgressBar;
