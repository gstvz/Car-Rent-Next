import Link from "next/link";
import * as S from "./styles";
import { IoArrowBack, IoArrowForward } from "@icons";

export const SignUpForm = () => {
  return (
    <S.Container>
      <S.FormTitle>Sign Up</S.FormTitle>
      <S.Form>
        <S.Label htmlFor="name">
          <S.Input type="text" id="name" placeholder="Name" />
        </S.Label>
        <S.Label htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input type="text" id="password" placeholder="Password" />
        </S.Label>
        <S.Button>
          Sign Up
          <IoArrowForward />
        </S.Button>
      </S.Form>
      <Link href="/">
        <a>
          <S.ActionLink>
            <IoArrowBack />
            Back
          </S.ActionLink>
        </a>
      </Link>
    </S.Container>
  );
};
