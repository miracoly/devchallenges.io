import styled from "styled-components";
import Colors from "../../utils/Colors";
import TextDefaults from "../../utils/TextDefaults";
import Flex from "../Layout/Flex";
import { H2 } from "../Standard/Headlines";
import Span from "../Standard/Span";

const StayImage = styled.div`
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

const SuperHost = styled.span`
  padding: 6px 10px;
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  color: ${Colors.text.tertiary};
  font-family: ${TextDefaults.fontFamily.primary};
  font-size: ${TextDefaults.fontSize.small};
  line-heigth: 15px;
  font-weight: 700;
  text-transform: uppercase;
`;

const StayCard = ({ title, type, beds, rating, photo, superHost }) => (
  <div>
    <StayImage url={photo} alt="location" />
    <Flex margin="10px 0">
      {superHost ? <SuperHost>Super Host</SuperHost> : null}
      <Span>{type}</Span>
      <Span>{beds ? beds + (beds === 1 ? " bed" : " beds") : null}</Span>
      <Span>
        <MaterialIcon>star</MaterialIcon> {rating}
      </Span>
    </Flex>
    <H2>{title}</H2>
  </div>
);

export default StayCard;
