import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import AttributionIcon from '@mui/icons-material/Attribution';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  height: 120vh;
  background-color: ${({ theme }) => theme.bgBar};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const LogoText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const LogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.mainSoft};
`;

const SignIn = styled.div``;
const SignInButton = styled.button`
  padding: 1.5px 5px;
  background-color: transparent;
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.signIn};
  color: ${({ theme }) => theme.signIn};
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

const BestOf = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-top: 20px;
`;

const Menu = ({ theme, setTheme }) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <LogoText>
            <LogoImg src='https://res.cloudinary.com/mmin/image/upload/v1669291157/NinTube/nintubeLogo_vuwtnp.png' />{' '}
            NinTube
          </LogoText>
        </Link>
        <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Item>
          <EngineeringIcon />
          Ninjutsu
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <AttributionIcon />
          Chakra
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <SignIn>
          Sign in to like videos, commment, and subscribe. <br />
          <SignInButton>
            {' '}
            <AccountCircleIcon />
            SIGN IN
          </SignInButton>
        </SignIn>
        <Hr />
        <BestOf>BEST OF NINTUBE</BestOf>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <LocalMoviesIcon />
          Movies
        </Item>
        <Item>
          <FiberNewIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <ReportIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item onClick={() => setTheme(!theme)}>
          <SettingsBrightnessIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
