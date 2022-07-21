import { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => (
  <>
    <Link to='/packed'>Packed</Link>
    <Link to='/packed/cellsize'>Cell Size</Link>
  </>
);

export default HomePage;
