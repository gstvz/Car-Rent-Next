import * as S from "./authStyles";
import Head from "next/head";
import { AuthLogo, SignInForm } from "@components";

const SignIn = () => {
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

export default SignIn;
