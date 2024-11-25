import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #333; // Darker border for contrast
  background-color: black; // Ensure background is black
`;

const Copyright = styled.p`
  font-size: 14px;
  margin: 0;
  color: white; // Ensure text is white
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  color: white; // Change to white
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease; // Smooth transition for hover effect

  &:hover, &:focus, &:active {
    color: white; // Change this to your preferred hover/active color
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright>&copy; 2024 samuel akinosho. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;