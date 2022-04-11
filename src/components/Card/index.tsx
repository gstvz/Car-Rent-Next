import * as S from "./styles";
import Image from "next/image";
import { useHover } from "@hooks";

export const Card = () => {
  const { isHovering, handleHovering } = useHover();

  return (
    <S.Card
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
      isHovering={isHovering}
    >
      <S.Header>
        <S.MakeAndModelWrapper>
          <S.CarMake>Ferrari</S.CarMake>
          <S.CarModel>CALIFORNIA</S.CarModel>
        </S.MakeAndModelWrapper>
        <S.OptionsWrapper>
          <S.OptionDot />
          <S.OptionDot />
          <S.OptionDot />
        </S.OptionsWrapper>
      </S.Header>
      <S.CarImageWrapper>
        <Image
          src="https://i.ibb.co/vX5GtS9/Mask-Group-11.png"
          height={107}
          width={244}
          alt="Car"
          layout="intrinsic"
        />
      </S.CarImageWrapper>
      <S.Footer isHovering={isHovering}>
        <S.BookNow isHovering={isHovering}>Book Now</S.BookNow>
        <S.CarPriceWrapper>
          <S.MoneySign>$</S.MoneySign>
          <S.CarPrice>725</S.CarPrice>
          <S.CarPriceDay>/day</S.CarPriceDay>
        </S.CarPriceWrapper>
      </S.Footer>
    </S.Card>
  );
};
