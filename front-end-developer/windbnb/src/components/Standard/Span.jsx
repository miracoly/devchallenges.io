import styled from "styled-components";
import Colors from "../../utils/Colors";
import TextDefaults from "../../utils/TextDefaults";

const Span = styled.span`
  font-family: ${TextDefaults.fontFamily.primary};
  font-style: normal;
  font-weight: 500;
  font-size: ${TextDefaults.fontSize.medium};
  color: ${(props) => props.color || Colors.text.primary};
`;

export default Span;
