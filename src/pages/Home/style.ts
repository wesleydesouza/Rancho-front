import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray100};
  flex-direction: column;
  padding: 4%;
  gap: 4em;

  h2 {
    font-size: 1.2em;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Error = styled.span`
  color: ${(props) => props.theme.colors.danger};
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 10px 1px rgba(5, 5, 5, 0.1);
  font-size: 1.1em;
  transition: all 0.5s;

  span,
  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
  }

  p {
    width: 20%;
  }
`;

interface ButtonsWrapperProps {
  amount?: boolean;
}

export const ButtonsWrapper = styled.div<ButtonsWrapperProps>`
  display: flex;
  gap: ${(props) => (props.amount ? 0.2 : 1)}em;
`;

export const Amount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  span {
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
  }
`;
