import * as S from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalidValue?: boolean;
}

export const Input = ({ invalidValue = false, ...rest }: InputProps) => {
  return (
    <>
      <S.Input {...rest} invalidValue={invalidValue} />
    </>
  );
};
