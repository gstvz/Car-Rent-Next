import * as S from "./styles";
import {
  IoCalendar,
  IoLocationSharp,
  IoMenuOutline,
  IoSearchOutline,
} from "@icons";
import { useTheme } from "styled-components";
import Link from "next/link";
import { useUnavailableToast } from "@hooks";

export const Header = () => {
  const theme = useTheme();
  const { showUnavailableToast } = useUnavailableToast();

  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <a>
            <S.LogoWrapper>
              <S.LogoExotic>EXOTIC</S.LogoExotic>
              <S.LogoCars>CARS</S.LogoCars>
            </S.LogoWrapper>
          </a>
        </Link>
        <S.SearchBar onClick={showUnavailableToast}>
          <S.SearchParamsWrapper>
            <S.SearchParam>
              <IoLocationSharp size={18} color={theme.colors.option_dot} />
              <S.SearchParamInput
                placeholder="North Carolina, NC 90025"
                disabled
              />
            </S.SearchParam>
            <S.SearchParam>
              <IoCalendar size={18} color={theme.colors.option_dot} />
              <S.SearchParamDateInput placeholder="11/03/2021" disabled />
            </S.SearchParam>
            <S.SearchParam>
              <IoCalendar size={18} color={theme.colors.option_dot} />
              <S.SearchParamDateInput placeholder="12/12/2021" disabled />
            </S.SearchParam>
          </S.SearchParamsWrapper>
          <S.SearchButton>
            <IoSearchOutline size={18} color={theme.colors.button_primary} />
          </S.SearchButton>
        </S.SearchBar>
        <S.ButtonsContainer>
          <S.SignButton onClick={showUnavailableToast}>Sign up</S.SignButton>
          <S.SignButton onClick={showUnavailableToast} border>
            Sign in
          </S.SignButton>
        </S.ButtonsContainer>
        <S.MobileMenu onClick={showUnavailableToast}>
          <IoMenuOutline size={28} />
        </S.MobileMenu>
      </S.Container>
    </S.Header>
  );
};
