import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageContentWrapper } from '../../components/common/PageContentWrapper.styled';
import {
  PackedRulesWrapper,
  RulesList,
  PackedPageNavButtons,
} from './PackedPage.styled';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../hooks/redux';
import { deviceSelector } from '../../store/reducers/device/deviceSelector';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const PackedPage: FC = () => {
  const { device } = useAppSelector(deviceSelector);

  return (
    <>
      <ProgressBar progress='50vw' />
      <PageContentWrapper>
        <h4>Відправлення має бути надійно упаковане</h4>
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
          <Link to={`/${device.uid}/packed/cells`}>
            <Button $type='primary' $textSize='large'>
              Я ДОБРЕ УПАКУВАВ
            </Button>
          </Link>
        </PackedPageNavButtons>
      </PageContentWrapper>
    </>
  );
};

export default PackedPage;
