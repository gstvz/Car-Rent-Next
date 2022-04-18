import { Login } from "@types";
import { signIn } from "next-auth/react";

export async function signinUser(user: Login) {
  try {
    const request = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });
    return request;
  } catch (error) {
    console.log("User was not found!");
  }
}
