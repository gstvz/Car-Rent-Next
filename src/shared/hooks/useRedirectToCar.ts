import { useRouter } from "next/router";

export const useRedirectToCar = () => {
  const router = useRouter();

  const redirectToCar = () => {
    router.push("car/1");
  };

  return { redirectToCar };
};
