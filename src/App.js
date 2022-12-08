import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import { narutoTheme, sasukeTheme } from './utils/Theme';
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  const [ninTheme, setNinTheme] = useState(true);
  return (
    <ThemeProvider theme={ninTheme ? narutoTheme : sasukeTheme}>
      <Container>
        <Menu theme={ninTheme} setTheme={setNinTheme} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <h1>Vid</h1>
            <VideoCard />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
