import { toast } from "react-toastify";

export const useUnavailableToast = () => {
  const showUnavailableToast = () => {
    toast.warn("This functionality is not available yet!");
    return;
  };

  return { showUnavailableToast };
};
