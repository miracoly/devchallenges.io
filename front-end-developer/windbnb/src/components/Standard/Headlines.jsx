import styled from "styled-components";
import Colors from "../../utils/Colors";
import TextDefaults from "../../utils/TextDefaults";

const H1 = styled.h1`
  margin: 0;
  font-family: ${TextDefaults.fontFamily.primary};
  font-weight: 700;
  font-style: normal;
  font-size: ${TextDefaults.fontSize.big};
  color: ${Colors.text.primary};
`;

export const H2 = styled.h2`
  font-family: ${TextDefaults.fontFamily.primary};
  font-weight: 600;
  font-style: normal;
  font-size: ${TextDefaults.fontSize.large};
  color: ${Colors.text.primary};
`;

export default H1;
