import React, { FC } from 'react';
import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader: FC = () => (
  <LoaderWrapper>
    <Rings height='500' width='500' color='#032EDD' />
  </LoaderWrapper>
);

export default Loader;
