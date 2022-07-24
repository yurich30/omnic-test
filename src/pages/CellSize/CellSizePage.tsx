import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loader from '../../components/Loader/Loader';
import { fetchCells } from '../../store/reducers/deviceCells/actionCreator';
import { deviceCellsSelector } from '../../store/reducers/deviceCells/deviceCellsSelector';
import { deviceSelector } from '../../store/reducers/device/deviceSelector';
import { PageContentWrapper } from '../../components/common/PageContentWrapper.styled';
import {
  CellGrid,
  CellItem,
  CellItemInner,
  CellItemTitle,
  CellItemImageWrapper,
  CellItemInfoWrapper,
  CellButtonsWrapper,
} from './CellPage.styled';
import Button from '../../components/Button/Button';

const CellSizePage: FC = () => {
  const dispatch = useAppDispatch();
  const { device } = useAppSelector(deviceSelector);
  const { deviceCells, isLoading, error } = useAppSelector(deviceCellsSelector);
  const location = useLocation();
  const [isActive, setIsActive] = useState<string | null>(null);
  const deviceId = location.pathname.split('').slice(1, 37).join('');

  useEffect(() => {
    dispatch(fetchCells(deviceId));
  }, []);

  console.log(deviceCells);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Перевірте коректність введеного вами device_uid в адресі</h1>;
  }

  const cellsAdditional = [
    {
      additionalInformation: {
        type: '205.0x110.0x405.0',
        size: '20x11см',
        title: 'xxs',
        image: {
          url: '/xxs.svg',
          alt: 'xxs',
        },
      },
    },
    {
      additionalInformation: {
        type: '205.0x160.0x405.0',
        size: '20x16см',
        title: 'xs',
        image: {
          url: '/xs.svg',
          alt: 'xs',
        },
      },
    },
    {
      additionalInformation: {
        type: '205.0x210.0x405.0',
        size: '20x11см',
        title: 's',
        image: {
          url: '/s.svg',
          alt: 's',
        },
      },
    },
    {
      additionalInformation: {
        type: '385.0x110.0x405.0',
        size: '38x11см',
        title: 'm',
        image: {
          url: '/m.svg',
          alt: 'm',
        },
      },
    },
    {
      additionalInformation: {
        type: '385.0x160.0x405.0',
        size: '38x16см',
        title: 'l',
        image: {
          url: '/l.svg',
          alt: 'l',
        },
      },
    },
    {
      additionalInformation: {
        type: '385.0x210.0x405.0',
        size: '38x21см',
        title: 'xl',
        image: {
          url: '/xl.svg',
          alt: 'xl',
        },
      },
    },
    {
      additionalInformation: {
        type: '646.0x210.0x405.0',
        size: '64x21см',
        title: 'xxl',
        image: {
          url: '/xxl.svg',
          alt: 'xxl',
        },
      },
    },
    {
      additionalInformation: {
        type: '646.0x365.0x405.0',
        size: '64x36см',
        title: 'xxxl',
        image: {
          url: '/xxxl.svg',
          alt: 'xxxl',
        },
      },
    },
  ];

  const cells = deviceCells.map(x => ({
    ...x,
    additionalInformation: cellsAdditional.find(
      y => x.type === y.additionalInformation.type,
    )?.additionalInformation,
  }));

  console.log(cells);

  return (
    <>
      <ProgressBar progress='75vw' />
      <PageContentWrapper>
        <h4>Оберіть розмір посилки</h4>
        <CellGrid>
          {cells.map(el => (
            <CellItem
              disabled={!el.has_empty}
              key={el.type}
              isActive={el.type === isActive}
              onClick={() => setIsActive(el.type)}
            >
              {el.additionalInformation && (
                <CellItemInner>
                  <CellItemImageWrapper>
                    <img
                      src={el.additionalInformation.image.url}
                      alt={el.additionalInformation.image.alt}
                    />
                  </CellItemImageWrapper>
                  <CellItemInfoWrapper>
                    <CellItemTitle>
                      {el.additionalInformation.title}
                    </CellItemTitle>
                    <h6>{el.additionalInformation.size}</h6>
                  </CellItemInfoWrapper>
                </CellItemInner>
              )}
            </CellItem>
          ))}
        </CellGrid>
        <CellButtonsWrapper>
          <Link to={`/${device.uid}/packed`}>
            <Button $type='secondary' $textSize='small'>
              НАЗАД
            </Button>
          </Link>
          <Link to={`/${device.uid}/packed/cells/success`}>
            <Button isDisabled={!isActive} $type='primary' $textSize='small'>
              підтвердити
            </Button>
          </Link>
        </CellButtonsWrapper>
      </PageContentWrapper>
    </>
  );
};

export default CellSizePage;
