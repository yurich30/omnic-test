import { FC } from 'react';
import { NavCardText, NavCardWrapper } from './NavCard.styled';

export interface NavCardProps {
  image: {
    url: string;
    alt: string;
  };
  text: string;
}

const NavCard: FC<NavCardProps> = ({ image, text }) => (
  <NavCardWrapper>
    <img src={image.url} alt={image.alt} />
    <NavCardText>{text}</NavCardText>
  </NavCardWrapper>
);

export default NavCard;
