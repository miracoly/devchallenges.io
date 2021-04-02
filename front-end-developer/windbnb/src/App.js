import styled from "styled-components";
import Header from "./components/Header/Header";
import StayCardContainer from "./components/StayCardContainer/StayCardContainer";
import H1 from "./components/Standard/Headlines";
import Span from "./components/Standard/Span";
import Flex from "./components/Layout/Flex";
import "./App.css";
import Container from "./components/Layout/Container";
import { useState } from "react";
import staysData from "./utils/staysData";
import Stays from "./utils/Stays";

const BlockSpan = styled(Span)`
  display: inline-block;
  margin: 0;
`;

function App() {
  const initialStays = new Stays(...staysData);
  const [filteredStays, setFilteredStays] = useState(initialStays);

  const submitFilterSearch = (e) => {
    e.preventDefault();
    console.log(e);
    const currentLocation = e.target[0].value;
    const currentGuests = e.target[1].value;
    setFilteredStays(getFilteredStays(currentLocation, currentGuests));
  };

  const getFilteredStays = (location, guests) =>
    initialStays.filterByLocation(location).filterByBeds(guests);

  return (
    <div className="app">
      <Header {...{ filteredStays, submitFilterSearch }} />
      <Container>
        <main>
          <Flex>
            <H1>Stays in Finland</H1>
            <BlockSpan>{filteredStays.length} stays</BlockSpan>
          </Flex>
          <Container>
            <StayCardContainer {...{ filteredStays }} />
          </Container>
        </main>
      </Container>
    </div>
  );
}

export default App;
