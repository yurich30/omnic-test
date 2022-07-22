import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageContentWrapper } from '../../components/common/PageContentWrapper.styled';
import {
  PackedRulesWrapper,
  RulesList,
  PackedPageNavButtons,
} from './PackedPage.srtled';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../hooks/redux';
import { deviceSelector } from '../../store/reducers/device/deviceSelector';

const PackedPage: FC = () => {
  const { device } = useAppSelector(deviceSelector);

  return (
    <PageContentWrapper>
      <h2>Відправлення має бути надійно упаковане</h2>
      <PackedRulesWrapper>
        <img src='/package.svg' alt='package' />
        <RulesList>
          <li>
            Упакуйте товар у коробку чи пакет. На упаковці не повинно бути
            сторонніх наклейок та етикеток;
          </li>
          <li>
            Заклейте упаковку скотчем, щоб не було доступу до вкладених
            предметів;
          </li>
        </RulesList>
      </PackedRulesWrapper>
      <PackedPageNavButtons>
        <Link to={`/${device.uid}`}>
          <Button $type='secondary' $textSize='small'>
            назад
          </Button>
        </Link>
        <Link to={`/${device.uid}/packed/cellsize`}>
          <Button $type='primary' $textSize='large'>
            Я ДОБРЕ УПАКУВАВ
          </Button>
        </Link>
      </PackedPageNavButtons>
    </PageContentWrapper>
  );
};

export default PackedPage;
