import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { Link } from 'react-router-dom';

const BlogSectionContainer = styled.section`
  padding: 40px 0;
  width: 100%;
  background-color: black;
  color: white;

  @media ${device.tablet} {
    padding: 80px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.tablet} {
    padding: 0 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
  color: white;
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: #EA4027;
    margin-top: 10px;
  }
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #333;
`;

const ProjectInfo = styled.div`
  flex-grow: 1;
`;

const ProjectTitle = styled(Link)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #888;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: #333;
  color: white;
`;

const Initials = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #EA4027;
`;

const BlogSection = ({ id }) => {
  const projects = [
    {
      title: "Building Kage-no-Shizawa: a quest for the Holy Grail of Private Blockchains",
      description: "Read the latest from Hackernews from within Alfred",
      tags: ["Blockchain", "Crypto", "Zero Knowledge Proofs"],
      link: "#"
    },
    {
      title: "zkSci-improving scientific research with zero knowledge proofs.",
      description: "Make and search notes in Notable from Alfred",
      tags: ["Blockchain", "Zero Knowledge Proofs"],
      link: "https://lucidsamuel.medium.com/zksci-improving-scientific-research-with-zero-knowledge-proofs-458c65970e8"
    },
    {
      title: "The world's most advanced DAO-Service Nervous System",
      description: "The world's most advanced DAO-Service Nervous System",
      tags: ["Blockchain", "DAOs"],
      link: "https://lucidsamuel.medium.com/the-worlds-most-advanced-dao-service-nervous-system-f90ae5b2242c"
    },
    {
      title: "Towards a truly decentralized blockchain",
      description: "Problems With Blockchain and Why We Need the Internet Computer",
      tags: ["Blockchain", "P"],
      link: "https://hackernoon.com/problems-with-blockchain-and-why-we-need-the-internet-computer#"
    },
    {
      title: "Building a Solana Wallet Generator with React",
      description: "Wallets are critical for getting into crypto or developing any dAPP (decentralized app) since they provide various important functions in the Web3 ecosystem.",
      tags: ["Blockchain", "Solana", "D"],
      link: "https://medium.com/codex/building-a-solana-wallet-generator-with-react-d992b0b1932f"
    },
    {
      title: "DeSci-The future of research",
      description: "The DeSci movement advocates for real decentralization, rejecting institutional influence, and supporting citizen research in the quest for truth.",
      tags: ["blockchain", "research", "desci"],
      link: "https://www.researchhub.com/question/564/desci-the-future-of-research"
    },
    {
      title: "The role of Observability & Monitoring in Software.",
      description: "A deep dive into observability and its significance in software engineering.",
      tags: ["blockchain", "research", "desci"],
      link: "https://medium.com/codex/the-role-of-observability-monitoring-in-software-46bd88f792fe"
    },
    {
      title: "Navigating user permissions with Cerbos.",
      description: "User permissions (authorizations and authentication) are an indisputable aspect of most systems’ essential operation, and they demand careful consideration in terms of design, structure, and construction.",
      tags: ["authentication", "programming", "auth"],
      link: "https://lucidsamuel.medium.com/navigating-user-permissions-with-cerbos-ec19577202ff"
    }
  ];

  return (
    <BlogSectionContainer id={id}>
      <ContentWrapper>
        <SectionTitle>my blog</SectionTitle>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectInfo>
                <ProjectTitle to={project.link}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectInfo>
              <Initials>LS</Initials>
            </ProjectItem>
          ))}
        </ProjectList>
      </ContentWrapper>
    </BlogSectionContainer>
  );
};

export default BlogSection;