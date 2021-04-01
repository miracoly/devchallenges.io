import styled from "styled-components";

const Flex = styled.div`
  margin: ${(props) => props.margin || "initial"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Flex;
