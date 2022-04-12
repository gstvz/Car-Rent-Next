import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [visibility, setVisibility] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 110) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  }, []);

  return { visibility, scrollToTop };
};
