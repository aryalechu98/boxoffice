import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navbar.styled';


const LINKS = [
  { toValue: '/', text: 'Home' },
  { toValue: '/#/starred', text: 'Starred' },
];

const Navbar = () => {
  const location=useLocation()
  
  return (
    <div>
      <NavList>
      {LINKS.map(item=><li key={item.toValue}><LinkStyled href={item.toValue} className={item.toValue === location.pathname ? 'active' : ''}>{item.text}</LinkStyled></li>)}
      </NavList>
    </div>
  );
};

export default memo(Navbar);
