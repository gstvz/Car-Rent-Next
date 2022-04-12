import { api } from "@services";

export async function getCars() {
  try {
    const { data } = await api.get("cars");
    return data;
  } catch (error) {
    console.log("Could not connect to server!");
  }
}
