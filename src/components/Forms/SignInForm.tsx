import Link from "next/link";
import * as S from "./styles";
import { IoArrowForward } from "@icons";

export const SignInForm = () => {
  return (
    <S.Container>
      <S.FormTitle>Sign In</S.FormTitle>
      <S.Form>
        <S.Label htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input type="text" id="password" placeholder="Password" />
        </S.Label>
        <Link href="/">
          <a>
            <S.PasswordLink>I forgot my password</S.PasswordLink>
          </a>
        </Link>
        <S.Button>
          Log In
          <IoArrowForward />
        </S.Button>
      </S.Form>
      <Link href="/">
        <a>
          <S.ActionLink>
            Sign Up
            <IoArrowForward />
          </S.ActionLink>
        </a>
      </Link>
    </S.Container>
  );
};
