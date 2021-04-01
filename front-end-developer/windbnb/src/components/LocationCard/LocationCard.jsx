import styled from "styled-components";
import Colors from "../../utils/Colors";
import TextDefaults from "../../utils/TextDefaults";
import Flex from "../Layout/Flex";
import { H2 } from "../Standard/Headlines";
import Span from "../Standard/Span";

const LocationImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 250px;
  min-height: 220px;
  width: 100%;
  border-radius: 24px;
`;

const MaterialIcon = styled(Span)`
  font-family: ${TextDefaults.fontFamily.icons};
  font-size: ${TextDefaults.fontSize.large};
  vertical-align: middle;
  position: relative;
  top: -1px;
  color: ${Colors.main.primary};
`;

const LocationCard = ({ title, type, beds, rating, photo }) => (
  <div>
    <LocationImage url={photo} alt="location" />
    <Flex margin="10px 0">
      <Span>{type}</Span>
      <Span>{beds ? beds + (beds === 1 ? " bed" : " beds") : null}</Span>
      <Span>
        <MaterialIcon>star</MaterialIcon> {rating}
      </Span>
    </Flex>
    <H2>{title}</H2>
  </div>
);

export default LocationCard;
