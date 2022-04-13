import Image from "next/image";
import { ActionButton } from "../ActionButton";
import * as S from "./styles";

export const CarDetails = () => {
  return (
    <S.Container>
      <S.Car>
        <S.Header>
          <Image
            src="https://i.ibb.co/JxBFp5X/No-Path-Copia-10.png"
            alt="Car"
            width={70}
            height={90}
          />
          <S.CarInfoWrapper>
            <S.MakeAndModel>Ferrari California</S.MakeAndModel>
            <S.PriceWrapper>
              <S.PriceSign>$</S.PriceSign>
              725/day
            </S.PriceWrapper>
          </S.CarInfoWrapper>
        </S.Header>
        <S.PhotoWrapper>
          <S.CarPhotoWrapper>
            <ActionButton back onPress={() => {}} text="Back to catalog" />
            <S.CarPhoto>
              <Image
                src="https://i.ibb.co/Lg6wLCf/Mask-Group-13.png"
                alt="Car"
                width={600}
                height={300}
              />
            </S.CarPhoto>
          </S.CarPhotoWrapper>
          <S.BookNowWrapper>
            <ActionButton forward onPress={() => {}} text="Book now" />
          </S.BookNowWrapper>
        </S.PhotoWrapper>
      </S.Car>
      <S.IdAndColor>
        <S.Id>01</S.Id>
        <S.Color>Red</S.Color>
      </S.IdAndColor>
    </S.Container>
  );
};
