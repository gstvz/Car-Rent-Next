import * as S from "./styles";
import { useTheme } from "styled-components";
import { IoChevronUpOutline } from "@icons";

type Props = {
  scrollToTop: () => void;
};

export const ScrollButton = ({ scrollToTop }: Props) => {
  const theme = useTheme();

  return (
    <S.Button onClick={scrollToTop}>
      <IoChevronUpOutline color={theme.colors.background_primary} size={73} />
    </S.Button>
  );
};
