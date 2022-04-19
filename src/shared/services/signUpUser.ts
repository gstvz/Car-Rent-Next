import { api } from "@services";
import { User } from "@types";
import { toast } from "react-toastify";

export async function signupUser(newUser: User) {
  try {
    const { data } = await api.post("auth/signup", newUser);
    toast.success("User signed up! 👌");
    return data;
  } catch (error: any) {
    const errorObject = error.response;
    if (errorObject.status === 422) {
      toast.error(errorObject.data.message);
    } else {
      toast.error("Could not register the user!");
    }
  }
}
