import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoints';
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
  padding: 1rem;
  box-sizing: border-box;
  position: relative;

  @media ${device.tablet} {
    padding: 2rem;
  }
`;

const Logo = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.2rem;
  margin: 0;
  color: white;

  @media ${device.tablet} {
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
  }
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
  margin-left: 20px;
  width: calc(100% - 40px);

  @media ${device.tablet} {
    margin-left: 50px;
    width: calc(100% - 200px);
  }
`;

const InfoText = styled.p`
  font-size: 3vw;
  margin-bottom: 2vw;
  font-family: 'Courier New', monospace;
  color: white;

  @media ${device.tablet} {
    font-size: 1vw;
    margin-bottom: 1vw;
  }
`;

const SoftwareText = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 12vw;
  line-height: 1;
  margin: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: white;

  @media ${device.tablet} {
    font-size: 15vw;
  }
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
  font-size: 8vw;
  letter-spacing: -0.3vw;
  text-transform: uppercase;
  color: white;

  @media ${device.tablet} {
    font-size: 11vw;
    letter-spacing: -0.5vw;
  }
`;

const YearText = styled(InfoText)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const BottomContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
`;

const SubtitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 2rem;
    margin-bottom: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 10px; // Fixed base size for better readability on mobile
  margin: 0.5rem 0;
  font-family: "Martian Mono", monospace;
  font-weight: 400;
  color: white;
  text-align: center;
  line-height: 1.5;

  @media ${device.mobileL} {
    font-size: 10px;
  }

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  z-index: 10;
  transition: opacity 0.3s ease;
  opacity: ${props => (props.isVisible ? 1 : 0)};

  @media ${device.mobileL} {
    left: 0.25rem;
  }

  @media ${device.tablet} {
    left: 2rem;
  }

  @media ${device.laptop} {
    left: 2.5rem;
  }
`;

const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide menu when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
          <Subtitle></Subtitle>
          </SubtitleContainer>
        </BottomContent> 
        <MenuContainer isVisible={isMenuVisible}>
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