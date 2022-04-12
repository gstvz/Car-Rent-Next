import * as S from "./styles";
import { IoArrowBack, IoArrowForward } from "@icons";

type ButtonProps = {
  back?: boolean;
  forward?: boolean;
  onPress: () => void;
  text: string;
};

export const ActionButton = ({ back, forward, onPress, text }: ButtonProps) => {
  return (
    <S.Button back={back} forward={forward} onClick={onPress}>
      {back ? <IoArrowBack size={20} /> : text}
      {forward ? <IoArrowForward size={20} /> : text}
    </S.Button>
  );
};
