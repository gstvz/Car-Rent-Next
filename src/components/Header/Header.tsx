import * as S from "./styles";
import { IoCalendar, IoLocationSharp, IoSearchOutline } from "../../shared/icons/index";
import { useTheme } from "styled-components";

export const Header = () => {
  const theme = useTheme();

  return (
    <S.Header>
      <S.Container>
        <S.LogoWrapper>
          <S.LogoExotic>EXOTIC</S.LogoExotic>
          <S.LogoCars>CARS</S.LogoCars>
        </S.LogoWrapper>
        <S.SearchBar>
          <S.SearchParamsWrapper>
            <S.SearchParam>
              <IoLocationSharp size={18} color={theme.colors.option_dot} />
              <S.SearchParamInput placeholder="North Carolina, NC 90025" disabled />
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
          <S.SignButton>
            Sign up
          </S.SignButton>
          <S.SignButton border>
            Sign in
          </S.SignButton>
        </S.ButtonsContainer>
      </S.Container>
    </S.Header>
  )
}
