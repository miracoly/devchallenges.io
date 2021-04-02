import styled from "styled-components";
import StayCard from "../StayCard/StayCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const StayCardContainer = ({ filteredStays }) => (
  <Grid>
    {filteredStays.map((stay) => (
      <StayCard key={stay.title} {...stay} />
    ))}
  </Grid>
);

export default StayCardContainer;
