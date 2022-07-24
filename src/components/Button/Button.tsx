import { FC, PropsWithChildren } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  isDisabled?: boolean;
  $type: 'primary' | 'secondary';
  $textSize: 'large' | 'small';
  children: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  isDisabled,
  $type,
  $textSize,
  children,
}) => (
  <ButtonStyled disabled={isDisabled} $type={$type} $textSize={$textSize}>
    {children}
  </ButtonStyled>
);

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
