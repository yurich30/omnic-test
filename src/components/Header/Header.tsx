import { FC } from 'react';
import Container from '../Container/Container';
import { HeaderContent, LinkStyled } from './Header.styled';
import { useAppSelector } from '../../hooks/redux';
import { deviceSelector } from '../../store/reducers/device/deviceSelector';

const Header: FC = () => {
  const { device } = useAppSelector(deviceSelector);

  return (
    <header>
      <Container>
        <HeaderContent>
          <img src='/logo.svg' alt='Logo' />
          <nav>
            <LinkStyled $type='secondary' to='/'>
              Інструкція
            </LinkStyled>
            <LinkStyled $type='primary' to='/'>
              Поштомат №{device.name}
            </LinkStyled>
          </nav>
        </HeaderContent>
      </Container>
    </header>
  );
};

export default Header;
