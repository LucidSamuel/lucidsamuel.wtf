import React from 'react';
import styled from 'styled-components';
// Remove unused imports
import Menu from './Menu';
import BlogSection from './BlogSection';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';

// Remove individual font imports

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: black;
  color: white;
`;

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.5rem;
  margin: 0;
  color: white;
`;

const ColoredDot = styled.span`
  color: #EA4027;
`;

const ContentWrapper = styled.div`
  margin-left: 50px; // Adjust based on your menu width
  width: calc(100% - 200px); // Ensure content doesn't extend full width
  max-width: 1200px; // Optional: set a max-width for larger screens
  padding: 0 2rem; // Add horizontal padding
  box-sizing: border-box;
`;

const MainContent = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const InfoText = styled.p`
  font-size: 1vw;
  margin-bottom: 1vw;
  font-family: 'Courier New', monospace;
  color: white;
`;

const SoftwareText = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700; // You can adjust this value between 100 and 700
  font-style: normal;
  font-size: 15vw;
  line-height: 1;
  margin: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: white;
`;

const Dash = styled.span`
  display: inline-block;
  width: 7vw;
  height: 0.5vw;
  background-color: white;
  margin-left: 1vw;
`;

const PixelTextContainer = styled.div`
  display: flex;
  font-size: 12.5vw;
  line-height: 1.2;
  margin-top: 1vw;
`;

const PixelText = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 11vw;
  letter-spacing: -0.5vw;
  text-transform: uppercase;
  color: white;
`;

const YearText = styled(InfoText)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const BottomContent = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SubtitleContainer = styled.div`
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1vw;
  margin: 0.5vw 0;
  font-family: "Martian Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  color: white;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Logo>lucid samuel<ColoredDot>.</ColoredDot></Logo>
        <YearText>[2024]</YearText>
        <MainContent>
          <InfoText>[LIVING ON-CHAIN]</InfoText>
          <SoftwareText>
            samuel
            <Dash />
          </SoftwareText>
          <PixelTextContainer>
            <PixelText>Akinosho<ColoredDot>.</ColoredDot></PixelText>
          </PixelTextContainer>
        </MainContent>
        <BottomContent>
          <SubtitleContainer>
            <Subtitle>i obsess daily on</Subtitle>
            <Subtitle>physics, privacy [zk], deFi and metaprotocols.</Subtitle>
          </SubtitleContainer>
        </BottomContent>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </HeroSection>
      <AboutMeSection id="about" />
      <BlogSection id="blog" />
      <ContactSection id="contact" />
    </HomeContainer>
  );
};

export default Home;