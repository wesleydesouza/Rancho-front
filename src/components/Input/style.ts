import styled from "styled-components";

interface InputProps {
  invalidValue: boolean;
}

export const Input = styled.input<InputProps>`
  width: 30%;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.invalidValue
        ? props.theme.colors.danger
        : props.theme.colors.blue200};
  color: ${(props) => props.theme.colors.black};
  outline: none;
  font-size: 0.7em;
  transition: all 0.5s;

  :focus {
    border: 1px solid ${(props) => props.theme.colors.blue500};
  }
`;
