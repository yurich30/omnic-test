import { FC } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { PageContentWrapper } from '../../components/common/PageContentWrapper.styled';

const SuccessPage: FC = () => (
  <>
    <ProgressBar progress='100vw' />
    <PageContentWrapper>
      <h1>ДЯКУЄМО ЩО СКОРИСТУВАЛИСЯ НАШИМ СЕРВІСОМ!</h1>
    </PageContentWrapper>
  </>
);

export default SuccessPage;
