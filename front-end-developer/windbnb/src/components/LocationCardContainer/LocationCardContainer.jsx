import styled from "styled-components";
import stays from "../../utils/stays";
import LocationCard from "../LocationCard/LocationCard";

const locationCards = stays.map((location) => (
  <LocationCard key={location.title} {...location} />
));

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const LocationCardContainer = () => <Grid>{locationCards}</Grid>;

export default LocationCardContainer;
