import { FC } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/${device.uid}`}>
            <img src='/logo.svg' alt='Logo' />
          </Link>
          <nav>
            <LinkStyled $type='secondary' to={`/${device.uid}/packed`}>
              Інструкція
            </LinkStyled>
            <LinkStyled $type='primary' to={`/${device.uid}/packed/cells`}>
              Поштомат №{device.name}
            </LinkStyled>
          </nav>
        </HeaderContent>
      </Container>
    </header>
  );
};

export default Header;
