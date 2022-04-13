import { useState } from "react";

export const useSlide = () => {
  const [activeColor, setactiveColorColor] = useState<number>(0);

  const handleSlideClick = (index: number) => {
    setactiveColorColor(index);
  };

  return { activeColor, handleSlideClick };
};
