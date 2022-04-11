import { useState } from "react"

export const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = () => {
    setIsHovering(!isHovering);
  };

  return { isHovering, handleHovering };
}