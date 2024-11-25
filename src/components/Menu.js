import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;

const MenuItem = styled.a`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-decoration: underline;
  color: #EA4027;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  text-transform: lowercase;
  transform: rotate(180deg);
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const Menu = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuContainer>
      <MenuItem onClick={() => scrollToSection('home')}>home</MenuItem>
      <MenuItem onClick={() => scrollToSection('blog')}>blog</MenuItem>
      <MenuItem onClick={() => scrollToSection('about')}>about</MenuItem>
      <MenuItem onClick={() => scrollToSection('contact')}>contact</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
