import { Login } from "@types";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export async function signinUser(user: Login) {
  const request = await signIn("credentials", {
    email: user.email,
    password: user.password,
    redirect: false,
  });

  if (request.error) {
    toast.error("User is not signed up!");
    return request;
  } else {
    toast.success("User signed in! 👌");
    return request;
  }
}
