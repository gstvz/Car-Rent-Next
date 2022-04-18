import { api } from "@services";
import { User } from "@types";

export async function signupUser(newUser: User) {
  try {
    const { data } = await api.post("auth/signup", newUser);
    return data;
  } catch (error) {
    console.log("Could not register the user!");
  }
}
