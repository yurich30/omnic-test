import { FC, PropsWithChildren } from 'react';
import { ButtonStyled } from './Button.styled';

export interface ButtonProps {
  $type: 'primary' | 'secondary';
  $textSize: 'large' | 'small';
  children: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  $type,
  $textSize,
  children,
}) => (
  <ButtonStyled $type={$type} $textSize={$textSize}>
    {children}
  </ButtonStyled>
);

export default Button;
