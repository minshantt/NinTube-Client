import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const VidCovImg = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const VidDetails = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const ChText = styled.div``;
const ChTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 8px 0px;
`;

const ChInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.soft};
`;

const Card = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container>
        <VidCovImg src='https://i.pinimg.com/originals/2f/13/58/2f13585e779db57afbcdbab17ded3e29.gif' />
        <VidDetails>
          <ChImg src='https://i.pinimg.com/564x/eb/25/a7/eb25a7a21df1a04e093cbfe3694de98a.jpg' />
          <ChText>
            <ChTitle>Explaining The Mangekyou Sharingan !!</ChTitle>
            <ChName>Mister Itachi</ChName>
            <ChInfo>6.9M views • 1 months ago</ChInfo>
          </ChText>
        </VidDetails>
      </Container>
    </Link>
  );
};

export default Card;
