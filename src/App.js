import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
const Container = styled.div`
  display: flex;
  background-color: gray;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
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
          <VideoCard />
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
