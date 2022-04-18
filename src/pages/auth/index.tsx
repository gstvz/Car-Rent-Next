import * as S from "./styles";
import Head from "next/head";
import { AuthLogo, SignInForm } from "@components";

const Auth = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <S.Section>
        <AuthLogo />
        <SignInForm />
      </S.Section>
    </>
  );
};

export default Auth;
