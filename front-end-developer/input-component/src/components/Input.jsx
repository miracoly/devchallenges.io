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
  border: 1px solid #828282;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:hover {
    border-color: #333333;
  }
  &:focus {
    border: 1px solid #2962ff;
  }
`;

const Container = styled.div`
  margin: 30px;
  text-align: left;
`;

const Input = ({ id }) => (
  <Container>
    <StyledLabel htmlFor={id}>Label</StyledLabel>
    <StyledInput id={id}></StyledInput>
  </Container>
);

export default Input;
