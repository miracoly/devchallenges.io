import styled from "styled-components";
import Colors from "../../utils/Colors";
import TextDefaults from "../../utils/TextDefaults";

const Icon = styled.span`
  font-size: ${TextDefaults.fontSize.large};
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  color: ${Colors.text.tertiary};
`;

export default Icon;
