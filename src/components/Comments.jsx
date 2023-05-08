import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin: 30px 0px;
`;

const ChImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChDate = styled.span`
  margin: 0px 0px 0px 5px;
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChComment = styled.p`
  margin-top: 1%;
  color: ${({ theme }) => theme.text};
`;

const ChCommentAction = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2vh 0vh 0vh 0vh;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const ChLikeButt = styled.button`
  padding: 10px 10px;
`;

const ChLikeCount = styled.span`
  display: block;
  margin: 0px 0px 0px -10px;
`;

const ChReplyButt = styled.button`
  font-size: 14px;
  font-weight: bold;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  padding: 5px 15px;
  cursor: pointer;

  &:hover {
    background: #eee;
    color: #18202a;
    border-radius: 10px;
  }
`;

const Comments = () => {
  return (
    <Container>
      <ChImg src='https://i.pinimg.com/originals/09/5c/d7/095cd770a29607d84dd548c7574f1f8b.jpg' />
      <ChDetails>
        <ChName>
          Kakashi CopyNinja <ChDate>1 months ago</ChDate>
        </ChName>
        <ChComment>
          The uchiha clan trade eyes like they Pokémon cards
        </ChComment>
        <ChCommentAction>
          <ThumbUpIcon style={{ cursor: 'pointer' }} />
          <ChLikeCount>16</ChLikeCount>
          <ThumbDownIcon style={{ cursor: 'pointer' }} />
          <ChReplyButt>Reply</ChReplyButt>
        </ChCommentAction>
      </ChDetails>
    </Container>
  );
};

export default Comments;
