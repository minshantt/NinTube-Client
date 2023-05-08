import React from 'react';
import styled from 'styled-components';
import SortIcon from '@mui/icons-material/Sort';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Container = styled.div`
  padding: 15zpx 0px;
`;

const SummarizeComm = styled.div`
  display: flex;
  margin: 14px 0px;
  gap: 16px;
  width: 560px;
`;

const TotalComments = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  font-kerning: normal;
  gap: 6px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const NewComment = styled.div`
  display: flex;
  gap: 14px;
`;

const AvartarImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const UserInput = styled.div`
  width: 100%;
`;

const InputComment = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textSoft};
  font-size: 15px;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.mainSoft};
  margin-bottom: 20px;
  width: 96%;
`;
const UserButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`;

const UserEmoji = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
`;

const UserCancel = styled.button`
  display: flex;
  align-items: center;
  margin-left: 70%;
  font-size: 15px;
  font-weight: bold;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border-radius: 20px 20px;
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    background: #eee;
    color: #18202a;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const UserConfirm = styled.button`
  font-size: 15px;
  font-weight: bold;
  background: ${({ theme }) => theme.subscribe};
  color: ${({ theme }) => theme.text};
  padding: 10px 15px;
  border-radius: 20px 20px;
  cursor: pointer;
  border: none;
  transiton: box-shadow 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
    color: #18202a;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const AddComment = () => {
  return (
    <Container>
      <SummarizeComm>
        <TotalComments>12 Comments</TotalComments>
        <SortButton>
          <SortIcon />
          Sort By
        </SortButton>
      </SummarizeComm>
      <NewComment>
        <AvartarImg src='https://yt3.ggpht.com/Oxc3mSAazmj8SatVKQYaffEklEBSf4H-XDLJRrHCMbb1s16xQh7lwix8gagRnOX08mH0INJ0oQ=s88-c-k-c0x00ffffff-no-rj' />
        <UserInput>
          <InputComment placeholder='Add a comment...' />
          <Hr />
          <UserButton>
            <UserEmoji>
              <EmojiEmotionsIcon />
            </UserEmoji>
            <UserCancel>Cancel</UserCancel>
            <UserConfirm>Comment</UserConfirm>
          </UserButton>
        </UserInput>
      </NewComment>
    </Container>
  );
};

export default AddComment;
