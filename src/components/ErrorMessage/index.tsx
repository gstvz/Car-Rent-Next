import * as S from "./styles";
import { IoCloseCircleOutline } from "@icons";

type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return (
    <S.Container>
      <IoCloseCircleOutline size={200} color="#FC0303" />
      <S.Message>Sorry! {message}</S.Message>
    </S.Container>
  );
};
