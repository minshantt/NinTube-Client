import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgBar};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 25px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  justify-content: space-between;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;
const SeachInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`;
const SignInButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.signIn};
  color: ${({ theme }) => theme.signIn};
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <SeachInput placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        <Link to='/SignIn' style={{ textDecoration: 'none', color: 'inherit' }}>
          <SignInButton>
            <AccountCircleIcon />
            SIGN IN
          </SignInButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
