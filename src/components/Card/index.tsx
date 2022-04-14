import * as S from "./styles";
import Image from "next/image";
import { useHover } from "@hooks";
import { Car } from "@types";

type Props = {
  car: Car;
  onPress: () => void;
};

export const Card = ({ car, onPress }: Props) => {
  const { isHovering, handleHovering } = useHover();

  return (
    <S.Card
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
      isHovering={isHovering}
      onClick={onPress}
    >
      <S.Header>
        <S.MakeAndModelWrapper>
          <S.CarMake>{car.make}</S.CarMake>
          <S.CarModel>{car.model}</S.CarModel>
        </S.MakeAndModelWrapper>
        <S.OptionsWrapper>
          <S.OptionDot />
          <S.OptionDot />
          <S.OptionDot />
        </S.OptionsWrapper>
      </S.Header>
      <S.CarImageWrapper>
        <Image
          src={car.thumbnail}
          height={107}
          width={240}
          alt={car.alt}
          objectFit="scale-down"
        />
      </S.CarImageWrapper>
      <S.Footer isHovering={isHovering}>
        <S.BookNow isHovering={isHovering}>Book Now</S.BookNow>
        <S.CarPriceWrapper>
          <S.MoneySign>$</S.MoneySign>
          <S.CarPrice>{car.price}</S.CarPrice>
          <S.CarPriceDay>/day</S.CarPriceDay>
        </S.CarPriceWrapper>
      </S.Footer>
    </S.Card>
  );
};
