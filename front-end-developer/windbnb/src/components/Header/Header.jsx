import Container from "../Layout/Container";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";
import Flex from "../Layout/Flex";

const Header = ({ submitFilterSearch }) => (
  <Container>
    <header>
      <Flex>
        <Logo logoFile="logo.svg" />
        <Filter submitFilterSearch={submitFilterSearch} />
      </Flex>
    </header>
  </Container>
);

export default Header;
