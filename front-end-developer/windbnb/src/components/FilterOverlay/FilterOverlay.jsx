import styled from "styled-components";
import Colors from "../../utils/Colors";
import Stays from "../../utils/Stays";
import staysData from "../../utils/staysData";
import Icon from "../Standard/Icon";
import Span from "../Standard/Span";

const StyledDiv = styled.div`
  background: ${Colors.light.primary};
  position: absolute;
  padding-top: 10px;
  top: 85px;
  left: 0;
  width: 100vw;
  height: 33vh;
  z-index: 99999;
  display: grid;
  place-items: start center;
`;

const DarkOverlay = styled.div`
  background: ${Colors.text.primary + "99"};
  position: fixed;
  top: 85px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 99998;
`;

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 24px;
  cursor: pointer;
`;

const ListIcon = styled(Icon)`
  position: relative;
  right: 15px;
`;

const stays = new Stays(...staysData);

const FilterOverlay = ({ setLocationSearch, hideOverlay, locationSearch }) => (
  <>
    <StyledDiv>
      <ul>
        {stays.extractMatchingCities(locationSearch).map((city, i) => (
          <Li
            key={i}
            onClick={(e) => {
              setLocationSearch(city.match(/[\w\s]+/i)[0]);
              hideOverlay();
            }}
          >
            <ListIcon>place</ListIcon>
            <Span>{city}</Span>
          </Li>
        ))}
      </ul>
    </StyledDiv>
    <DarkOverlay onClick={hideOverlay} />
  </>
);

export default FilterOverlay;
