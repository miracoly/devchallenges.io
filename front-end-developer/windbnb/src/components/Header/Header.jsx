import Logo from "..//Logo/Logo";

const Header = () => (
  <header>
    <Logo logoFile="logo.svg" />
    <div>
      <div className="location-filter">Helsinki, Finland</div>
      <div className="guests-count">Add guests</div>
      <div className="search">Search</div>
    </div>
  </header>
);

export default Header;
