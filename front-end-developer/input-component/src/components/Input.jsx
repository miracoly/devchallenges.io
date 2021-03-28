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
  disabled: props.disabled,
}))`
  min-width: 200px;
  padding: 18px 12px;
  border: 1px solid;
  ${"" /* border-color: ${(props) => (props.error ? "#D32F2F" : "#828282")}; */}
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

const StyledHelperText = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
`;

const Container = styled.div`
  margin: 30px;
  width: fit-content;
  text-align: left;
  color: ${(props) => (props.error ? "#D32F2F" : "#333333")};
  & input {
    border-color: ${(props) => (props.error ? "#D32F2F" : "#828282")};
  }
  &:hover {
    color: #333333;
    & input {
      border-color: #333333;
    }
  }
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Input = (props) => {
  const { children, error, disabled, helperText } = props;
  const id = getRandomInt(10000000, 99999999);
  return (
    <Container error={error}>
      <StyledLabel error={error} htmlFor={id}>
        {children}
      </StyledLabel>
      <StyledInput error={error} disabled={disabled} id={id} />
      {helperText ? (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      ) : null}
    </Container>
  );
};

export default Input;
