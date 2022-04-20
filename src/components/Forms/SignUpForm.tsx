import Link from "next/link";
import * as S from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoArrowBack, IoArrowForward } from "@icons";
import { registerSchema } from "@schemas";
import { signupUser } from "@services";
import { useRouter } from "next/router";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (registerData) => {
    const signup = await signupUser(registerData);

    if (signup) {
      router.replace("/sign-in");
    }
  };

  return (
    <S.Container>
      <S.FormTitle>Sign Up</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="name">
          <S.Input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
          />
          <S.InvalidInput>{errors.name?.message}</S.InvalidInput>
        </S.Label>
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
