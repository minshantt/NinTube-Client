import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const VidContent = styled.div`
  flex: 5;
`;

const VidWrapper = styled.div``;
const VidRecommend = styled.div`
  flex: 2;
`;

const Ch = styled.div`
  display: flex;
  gap: 14px;
`;

const ChDetails = styled.div`
  padding: 2px 0px;
`;

const ChImg = styled.img`
  height: 40px;
  weight: 40px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

const ChName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
  cursor: pointer;
`;

const ChSub = styled.p`
  cursor: pointer;
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const VidTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 9px;
  color: ${({ theme }) => theme.text};
`;

const VidTag = styled.p`
  cursor: pointer;
  margin: 11px 0px 4px 0px;
  font-size: 13px;
  color: ${({ theme }) => theme.signIn};
`;
const VidDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const VidInfo = styled.div`
  color: ${({ theme }) => theme.textSoft};
  margin: 10px;
`;
const VidButton = styled.div`
  display: flex;
  gap: 24px;
`;
const SubButt = styled.button`
  font-size: 15px;
  font-weight: bold;
  background: ${({ theme }) => theme.subscribe};
  color: ${({ theme }) => theme.text};
  border-radius: 20px 20px;
  cursor: pointer;
  border: none;
  margin: 5px 0px 5px 7px;
  padding: 0px 15px;
`;

const Butt = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.text};
`;

// const Hr = styled.hr`
//   border: 0.5px solid ${({ theme }) => theme.mainSoft};
//   margin: 15px 0px;
// `;

// const BorderInfo = styled.div`
//   border-radius: 7px 7px 7px 7px;
//   background: ${({ theme }) => theme.mainSoft};
//   padding: 10px 0px;
//   weight: auto;
//   height: auto;
// `;

const BorderButton = styled.div`
  border-radius: 7px 7px 7px 7px;
  background: ${({ theme }) => theme.mainSoft};
  padding: 10px 0px;
  weight: auto;
  height: auto;
  align-items: center;
`;
const Video = () => {
  return (
    <Container>
      <VidContent>
        <VidWrapper>
          <iframe
            src='https://www.youtube.com/embed/0KhHE75GGoo'
            width='100%'
            height='624px'
            frameBorder='0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </VidWrapper>
        <VidTag>#Sharingan #Naruto #Ninjutsu #Uchiha</VidTag>
        <VidTitle>Explaining The Mangekyou Sharingan !!</VidTitle>
        <VidDetails>
          <Ch>
            <ChImg src='https://i.pinimg.com/564x/eb/25/a7/eb25a7a21df1a04e093cbfe3694de98a.jpg' />
            <ChDetails>
              <ChName>
                Mister Itachi &nbsp;
                <CheckCircleIcon style={{ fontSize: 'small' }} />
              </ChName>
              <ChSub>509K subscribers</ChSub>
            </ChDetails>
            <SubButt>Subscribe</SubButt>
          </Ch>
          <VidButton>
            <Butt>
              <BorderButton style={{ display: 'flex', padding: '5px 10px' }}>
                <ThumbUpIcon style={{ cursor: 'pointer' }} />
                &nbsp;&nbsp;69k |&nbsp;&nbsp;
                <ThumbDownIcon style={{ cursor: 'pointer' }} />
              </BorderButton>
              <BorderButton
                style={{
                  display: 'flex',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <ShareIcon />
              </BorderButton>
              <BorderButton
                style={{
                  display: 'flex',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <ContentCutIcon />
              </BorderButton>
              <BorderButton
                style={{
                  display: 'flex',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <MoreHorizIcon />
              </BorderButton>
            </Butt>
          </VidButton>
        </VidDetails>
        <BorderButton>
          <VidInfo>6.9M views • 1 months ago</VidInfo>
          <VidInfo>
            Sharingan is one of the strongest eyes in the anime and manga
            Naruto: Shippuden and Boruto: Next Generation. In this video I will
            tell you about all the users of Sharingan. You are watching the
            Mister ITachi channel. Enjoy!
          </VidInfo>
        </BorderButton>
        <AddComment />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </VidContent>
      <VidRecommend>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
      </VidRecommend>
    </Container>
  );
};

export default Video;
