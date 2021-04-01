import styled from "styled-components";
import Header from "./components/Header/Header";
import LocationCardContainer from "./components/LocationCardContainer/LocationCardContainer";
import H1 from "./components/Standard/Headlines";
import Span from "./components/Standard/Span";
import Flex from "./components/Layout/Flex";
import "./App.css";
import Container from "./components/Layout/Container";

const BlockSpan = styled(Span)`
  display: inline-block;
  margin: 0;
`;

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        <main>
          <Flex>
            <H1>Stays in Finland</H1>
            <BlockSpan>12+ stays</BlockSpan>
          </Flex>
          <Container>
            <LocationCardContainer />
          </Container>
        </main>
      </Container>
    </div>
  );
}

export default App;
