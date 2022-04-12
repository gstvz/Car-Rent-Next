import * as S from "./styles";

type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <S.Section>{children}</S.Section>;
};
