import * as S from "./styles";
import Head from "next/head";
import { AuthLogo, SignUpForm } from "@components";

const Auth = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <S.Section>
        <AuthLogo />
        <SignUpForm />
      </S.Section>
    </>
  );
};

export default Auth;
