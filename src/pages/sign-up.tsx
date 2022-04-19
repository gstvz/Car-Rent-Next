import * as S from "./authStyles";
import Head from "next/head";
import { AuthLogo, SignUpForm } from "@components";

const SignUp = () => {
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

export default SignUp;
