import Link from "next/link";
import * as S from "./styles";

export const AuthLogo = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <S.LogoWrapper>
            <S.LogoExotic>EXOTIC</S.LogoExotic>
            <S.LogoCars>CARS</S.LogoCars>
          </S.LogoWrapper>
        </a>
      </Link>
    </S.Container>
  );
};
