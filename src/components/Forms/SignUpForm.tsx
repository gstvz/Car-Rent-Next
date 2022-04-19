import Link from "next/link";
import { Spinner } from "@chakra-ui/react";
import * as S from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoArrowBack, IoArrowForward } from "@icons";
import { registerSchema } from "@schemas";
import { signupUser } from "@services";
import { useRouter } from "next/router";
import { useIsLoading } from "@hooks";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const { isLoading, handleLoadingStatus } = useIsLoading();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (registerData) => {
    handleLoadingStatus(true);
    const signup = await signupUser(registerData);

    handleLoadingStatus(false);

    if (signup) {
      router.replace("/sign-in");
      return;
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
          {isLoading ? (
            <Spinner size="xl" />
          ) : (
            <>
              Sign Up <IoArrowForward />
            </>
          )}
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
