import styled from "styled-components";
import Header from "./components/Header/Header";
import LocationCardContainer from "./components/LocationCardContainer/LocationCardContainer";
import H1 from "./components/Standard/Headlines";
import Span from "./components/Standard/Span";
import Flex from "./components/Layout/Flex";
import "./App.css";
import Container from "./components/Layout/Container";
import { useState } from "react";
import stays from "./utils/stays";

const BlockSpan = styled(Span)`
  display: inline-block;
  margin: 0;
`;

function App() {
  const [locationSearch, setLocationSearch] = useState("");
  const [guestCount, setGuestCount] = useState(0);

  const submitFilterSearch = (e) => {
    e.preventDefault();
    const currentLocationSearch = e.target[0].value.toLowerCase();
    const currentGuestCount = e.target[1].value.toLowerCase();
    setLocationSearch(currentLocationSearch);
    setGuestCount(parseInt(currentGuestCount));
  };

  const getFilteredStaysData = () => {
    let filteredStays = getFilteredStaysByLocation(stays);
    filteredStays = getFilteredStaysByGuests(filteredStays);
    return filteredStays;
  };

  const getFilteredStaysByLocation = (stays) =>
    stays.filter(
      (location) =>
        location.city.toLowerCase().includes(locationSearch) ||
        location.country.toLowerCase().includes(locationSearch)
    );

  const getFilteredStaysByGuests = (stays) =>
    guestCount
      ? stays.filter(
          (location) => location.beds >= guestCount || location.beds === null
        )
      : stays;

  return (
    <div className="app">
      <Header submitFilterSearch={submitFilterSearch} />
      <Container>
        <main>
          <Flex>
            <H1>Stays in Finland</H1>
            <BlockSpan>
              {locationSearch} 12+ stays {guestCount}
            </BlockSpan>
          </Flex>
          <Container>
            <LocationCardContainer filteredStays={getFilteredStaysData()} />
          </Container>
        </main>
      </Container>
    </div>
  );
}

export default App;
