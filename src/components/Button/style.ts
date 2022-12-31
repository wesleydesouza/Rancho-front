import styled from "styled-components";

interface ButtonProps {
  paddingNone?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: 30px;
  min-height: 10px;
  padding: ${(props) => (props.paddingNone ? 0 : 4)}px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.blue200},
    ${(props) => props.theme.colors.blue500}
  );
  font-size: 0.7em;
  transition: all 0.5s;

  :hover {
    background-image: linear-gradient(
      45deg ${(props) => props.theme.colors.blue600}
        ${(props) => props.theme.colors.danger}
    );
  }
`;
