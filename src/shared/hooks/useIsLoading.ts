import { useState } from "react";

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingStatus = (value: boolean) => {
    setIsLoading(value);
    return;
  };

  return { isLoading, handleLoadingStatus };
};
