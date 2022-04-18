import { api } from "@services";

type NewUser = {
  name: string;
  email: string;
  password: string;
};

export async function signupUser(newUser: NewUser) {
  try {
    const { data } = await api.post("auth/signup", newUser);
    return data;
  } catch (error) {
    console.log("Could not register the user!");
  }
}
