import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoints';

const AboutSectionContainer = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

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
    margin-top: 10px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ProfileSection = styled.div`
  flex: 1;
  
  @media ${device.tablet} {
    flex: 0 0 30%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  text-decoration: underline;
  color: #EA4027;
  font-size: 14px;
  text-transform: uppercase;
`;

const InfoSection = styled.div`
  flex: 1;
`;

const MainInfo = styled.div`
  margin-bottom: 40px;
`;

const MainTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const MainDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ExperienceInfo = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div`
  margin-bottom: 40px;
`;

const InfoParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const FinalStatement = styled.h4`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ResumeLinks = styled.p`
  font-size: 14px;
`;

const StyledLink = styled.a`
  color: inherit;
  font-weight: bold;
  text-decoration: underline;
`;

const AboutMeSection = ({ id }) => {
  return (
    <AboutSectionContainer id={id}>
      <SectionTitle>me ...</SectionTitle>
      <AboutContent>
        <ProfileSection>
          <ProfileImage src="/images/profile.jpg" alt="Samuel Akinosho" />
          <ProfileName>Samuel Akinosho</ProfileName>
          <ProfileDescription>
          Research in: Ethereum; Programmable Cryptography [ZK, FHE, MPC, TEE] <br></br>
          Engineering: Rust; Typescript; Solidity; Golang; <br></br>
          Affiliations: zk Security; Mina Protocol; 

          </ProfileDescription>
          <SocialLinks>
            <SocialLink href="https://twitter.com/lucidsamuel_" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
            <SocialLink href="https://github.com/lucidsamuel" target="_blank" rel="noopener noreferrer">Github</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/samuel-akinosho/" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
          </SocialLinks>
        </ProfileSection>
        <InfoSection>
          <MainInfo>
            <MainTitle>I'm obsessed with building great developer experiences & community focused products that scale.</MainTitle>
            <MainDescription>
              Over the last 8 years I've worked as a software engineer, engineering manager, startup founder and also led developer-focused initiatives. 
            </MainDescription>
            <ExperienceInfo>
            I often <StyledLink href="#">write</StyledLink> technical articles about my interests. It's my way of transforming complex concepts into digestible insights for fellow developers.  
            </ExperienceInfo>
          </MainInfo>
          <AdditionalInfo>
            <InfoParagraph>
            As a devrel and devX engineer, I've contributed to the growth and adoption of Zero-Knowledge proofs (ZKPs)
             at o1 Labs for the Mina Blockchain focused on building better developer experiences for zkApps through o1SDK, Kimchi & Pickles. Prior to that, I contributed to growing the Internet Computer developer ecosystem at the Dfinity Foundation through ecosystem Initiatives like the ICP Hub, Dfinity Supanova [one of the largest web3 hackathons], interprobability with bitcoin and ethereum ecosystems.
            </InfoParagraph>
            <InfoParagraph>
              Beyond the code screens, you'll catch me teeing off at the golf course, grappling in MMA sessions, or rallying on the tennis court.
            </InfoParagraph>
          </AdditionalInfo>
          <FinalStatement>
            And now I obsess over building products: 
          </FinalStatement>
          <ResumeLinks>
            <StyledLink href="https://evm.ink" target="_blank">Evm Ink</StyledLink> 𒐪 
            <StyledLink href="https://www.ordinalscouncil.com" target="_blank"> Ordinals Council</StyledLink> 𒐪 
            <StyledLink href="https://x.com/usestackup" target="_blank"> Stack Up</StyledLink> 𒐪 
            <StyledLink href="https://x.com/yieldsdotfun" target="_blank"> Yields</StyledLink> 𒐪 
            <StyledLink href="https://kage-no-shiwaza.vercel.app"> Kage Protocol</StyledLink> 𒐪 
            
          </ResumeLinks>
        </InfoSection>
      </AboutContent>
    </AboutSectionContainer>
  );
};

export default AboutMeSection;