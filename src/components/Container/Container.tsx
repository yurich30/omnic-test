import { FC } from 'react';
import { ContainerStyled } from './Container.styled';

interface Props {
  children: JSX.Element;
}

const Container: FC<Props> = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default Container;
