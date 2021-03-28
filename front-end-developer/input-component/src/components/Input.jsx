import styled from "styled-components";

/* Colors */
const colors = {
  primary: "#333333",
  seconday: "#2962FF",
  error: "#D32F2F",
  gray: "#828282",
};

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
  placeholder: "Placeholder",
  disabled: props.disabled,
}))`
  min-width: 250px;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  box-sizing: border-box;
  padding: ${(props) => (props.size === "sm" ? "10px 12px" : "18px 12px")};
  padding-left: ${(props) => (props.paddingLeft ? "38px" : "12px")};
  padding-right: ${(props) => (props.paddingRight ? "38px" : "12px")};
  border: 1px solid;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: ${(props) => (props.error ? colors.error : colors.seconday)};
  }
`;

const StyledTextarea = styled.textarea.attrs((props) => ({
  id: props.id,
  rows: props.row,
  placeholder: "Placeholder",
  disabled: props.disabled,
}))`
  min-width: 250px;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  box-sizing: border-box;
  padding: ${(props) => (props.size === "sm" ? "10px 12px" : "18px 12px")};
  padding-left: ${(props) => (props.paddingLeft ? "38px" : "12px")};
  padding-right: ${(props) => (props.paddingRight ? "38px" : "12px")};
  border: 1px solid;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: ${(props) => (props.error ? colors.error : colors.seconday)};
  }
`;

const StyledHelperText = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
`;

const EndIcon = styled.span.attrs({
  className: "material-icons",
})`
  font-size: 18px;
  color: ${colors.gray};
  position: absolute;
  top: 18px;
  right: 12px;
`;

const StartIcon = styled.span.attrs({
  className: "material-icons",
})`
  font-size: 18px;
  color: ${colors.gray};
  position: absolute;
  top: 18px;
  left: 12px;
`;

const IconContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  margin: 30px;
  display: border-box;
  width: ${(props) => (props.fullWidth ? "auto" : "fit-content")};
  text-align: left;
  color: ${(props) => (props.error ? colors.error : colors.primary)};
  & input {
    border-color: ${(props) => (props.error ? colors.error : colors.gray)};
  }
  &:hover {
    color: ${colors.primary};
    & input {
      border-color: ${colors.primary};
    }
  }
  & input:focus {
    color: ${(props) => (props.error ? colors.error : colors.seconday)};
    border-color: ${(props) => (props.error ? colors.error : colors.seconday)};
  }
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Input = (props) => {
  const {
    children,
    value,
    size,
    error,
    disabled,
    helperText,
    startIcon,
    endIcon,
    fullWidth,
    multiLine,
    row,
  } = props;
  const id = getRandomInt(10000000, 99999999);
  return (
    <Container error={error} fullWidth={fullWidth}>
      <StyledLabel error={error} htmlFor={id}>
        {children}
      </StyledLabel>
      <IconContainer>
        {multiLine ? (
          <StyledTextarea
            paddingLeft={startIcon}
            paddingRight={endIcon}
            error={error}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            fullWidth={fullWidth}
            row={row}
          />
        ) : (
          <StyledInput
            paddingLeft={startIcon}
            paddingRight={endIcon}
            error={error}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            fullWidth={fullWidth}
          />
        )}
        {startIcon ? <StartIcon>{startIcon}</StartIcon> : null}
        {endIcon ? <EndIcon>{endIcon}</EndIcon> : null}
      </IconContainer>
      {helperText ? (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      ) : null}
    </Container>
  );
};

export default Input;
