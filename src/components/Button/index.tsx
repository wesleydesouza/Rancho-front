import * as S from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  paddingNone?: boolean;
  children: string;
}

export const Button = ({ paddingNone, children, ...rest }: ButtonProps) => {
  return (
    <>
      <S.Button paddingNone={paddingNone} {...rest}>
        {children}
      </S.Button>
    </>
  );
};
