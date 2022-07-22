import { FC } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { PageContentWrapper } from '../../components/common/PageContentWrapper.styled';
import { NavCardsWrapper, SubTitle } from './HomePage.styled';
import NavCard, { NavCardProps } from '../../components/NavCard/NavCard';
import { useAppSelector } from '../../hooks/redux';
import { deviceSelector } from '../../store/reducers/device/deviceSelector';

interface NavCardPropsWithId extends NavCardProps {
  id: string;
  path: string;
}

const HomePage: FC = () => {
  const { device } = useAppSelector(deviceSelector);

  const navArray: Array<NavCardPropsWithId> = [
    {
      id: '1',
      path: `/${device.uid}/packed`,
      image: {
        url: '/device.png',
        alt: 'device',
      },
      text: 'Надіслати посилку через поштомат',
    },
    {
      id: '2',
      path: `/${device.uid}`,
      image: {
        url: '/parcel.png',
        alt: 'parcel',
      },
      text: 'Повернення до інтернет магазину',
    },
  ];

  const renderNavCards = navArray.map(el => (
    <Link id={el.id} to={el.path}>
      <NavCard image={el.image} text={el.text} />
    </Link>
  ));

  return (
    <>
      <ProgressBar progress='25vw' />
      <PageContentWrapper>
        <h1>Вітаємо вас!</h1>
        <SubTitle>Що відправлятимемо сьогодні?</SubTitle>
        <NavCardsWrapper>{renderNavCards}</NavCardsWrapper>
      </PageContentWrapper>
    </>
  );
};

export default HomePage;
