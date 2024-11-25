import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const ColoredDot = styled.span`
  color: #EA4027;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  text-transform: lowercase;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
    <Logo>lucid samuel<ColoredDot>.</ColoredDot></Logo>
    <Nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/musings">musings</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;