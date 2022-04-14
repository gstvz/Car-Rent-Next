import { useRouter } from "next/router";
import { useUnavailableToast } from "@hooks";

export const useActionButton = () => {
  const router = useRouter();
  const { showUnavailableToast } = useUnavailableToast();

  const handleBackToCatalog = () => {
    router.push("/");
  };

  const handleBookNow = () => {
    showUnavailableToast();
  };

  return { handleBackToCatalog, handleBookNow };
};
