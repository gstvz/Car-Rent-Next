import { useRouter } from "next/router";

export const useRedirectToCar = () => {
  const router = useRouter();

  const redirectToCar = (id: number) => {
    router.push(`car/${id.toString()}`);
  };

  return { redirectToCar };
};
