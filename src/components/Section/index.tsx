import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Section = ({ children }: Props) => {
  return <S.Section>{children}</S.Section>;
};
