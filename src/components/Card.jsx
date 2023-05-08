import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 12px;
`;

const VidCovImg = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #999;
  flex: 1;
  border-radius: 5%;
`;

const VidDetails = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex: 1;
`;

const ChImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === 'sm' ? 'none' : 'true')};
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
  font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container type={type}>
        <VidCovImg
          type={type}
          src='https://i.pinimg.com/originals/2f/13/58/2f13585e779db57afbcdbab17ded3e29.gif'
        />
        <VidDetails type={type}>
          <ChImg
            type={type}
            src='https://i.pinimg.com/564x/eb/25/a7/eb25a7a21df1a04e093cbfe3694de98a.jpg'
          />
          <ChText>
            <ChTitle>Explaining The Mangekyou Sharingan !!</ChTitle>
            <ChName>Mister Itachi</ChName>
            <ChInfo type={type}>6.9M views • 1 months ago</ChInfo>
          </ChText>
        </VidDetails>
      </Container>
    </Link>
  );
};

export default Card;
