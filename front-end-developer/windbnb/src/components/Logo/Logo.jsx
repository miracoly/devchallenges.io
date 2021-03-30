import styled from "styled-components";

const Logo = styled.img.attrs((props) => ({
  src: process.env.PUBLIC_URL + props.logoFile,
  "data-testid": "logo",
  alt: "logo",
}))`
  height: 20px;
`;

export default Logo;
