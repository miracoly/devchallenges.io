import styled from "styled-components";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <Container>
    <StyledHeader>
      <Logo logoFile="logo.svg" />
      <Filter />
    </StyledHeader>
  </Container>
);

export default Header;
