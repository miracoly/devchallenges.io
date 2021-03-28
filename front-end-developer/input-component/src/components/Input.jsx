import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
  "data-testid": "label",
}))`
  font-size: 12px;
  display: block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input.attrs((props) => ({
  id: props.id,
  placeholder: "placeholder",
}))`
  min-width: 200px;
  padding: 18px 12px;
  border: 1px solid;
  border-color: ${(props) => (props.error ? "#D32F2F" : "#828282")};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:hover {
    border-color: #333333;
  }
  &:focus {
    border-color: ${(props) => (props.error ? "#D32F2F" : "#2962FF")};
  }
`;

const Container = styled.div`
  margin: 30px;
  text-align: left;
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Input = ({ error, children }) => {
  const id = getRandomInt(10000000, 99999999);
  return (
    <Container>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      <StyledInput error={error} id={id} />
    </Container>
  );
};

export default Input;
