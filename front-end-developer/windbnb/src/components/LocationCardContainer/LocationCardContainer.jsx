import styled from "styled-components";
import LocationCard from "../LocationCard/LocationCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const LocationCardContainer = ({ filteredStays }) => {
  const locationCards = filteredStays.map((location) => (
    <LocationCard key={location.title} {...location} />
  ));
  return <Grid>{locationCards}</Grid>;
};

export default LocationCardContainer;
