import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium, FaYoutube } from 'react-icons/fa';
import { SiHackernoon } from 'react-icons/si';

const ContactSectionContainer = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media ${device.tablet} {
    padding: 80px 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: #333;
    margin: 20px auto 0;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  @media ${device.tablet} {
    gap: 30px;
  }
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const OrderOfService = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: #666;
`;

const ContactSection = ({ id }) => {
  return (
    <ContactSectionContainer id={id}>
      <SectionTitle>contact me</SectionTitle>
      <SocialLinksContainer>
        <SocialLink href="https://twitter.com/lucidsamuel_" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/samuel-akinosho/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/lucidsamuel" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://medium.com/@lucidamuel" target="_blank" rel="noopener noreferrer">
          <FaMedium />
        </SocialLink>
        <SocialLink href="https://hackernoon.com/u/lucidamuel" target="_blank" rel="noopener noreferrer">
          <SiHackernoon />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/c/yourusername" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </SocialLink>
      </SocialLinksContainer>
      <OrderOfService>order of service</OrderOfService>
    </ContactSectionContainer>
  );
};

export default ContactSection;