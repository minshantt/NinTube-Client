import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import { narutoTheme, sasukeTheme } from './utils/Theme';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  padding: 22px 95px;
`;

function App() {
  const [ninTheme, setNinTheme] = useState(true);
  return (
    <ThemeProvider theme={ninTheme ? narutoTheme : sasukeTheme}>
      <Container>
        <BrowserRouter>
          <Menu theme={ninTheme} setTheme={setNinTheme} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
