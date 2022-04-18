import Link from "next/link";
import * as S from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoArrowForward } from "@icons";
import { loginSchema } from "@schemas";

type Inputs = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (loginData) => {
    console.log("oi");
  };

  return (
    <S.Container>
      <S.FormTitle>Sign In</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          <S.InvalidInput>{errors.email?.message}</S.InvalidInput>
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          <S.InvalidInput>{errors.password?.message}</S.InvalidInput>
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
