import Container from "../Layout/Container";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";
import Flex from "../Layout/Flex";

const Header = (props) => (
  <Container>
    <header>
      <Flex>
        <Logo logoFile="logo.svg" />
        <Filter {...props} />
      </Flex>
    </header>
  </Container>
);

export default Header;
