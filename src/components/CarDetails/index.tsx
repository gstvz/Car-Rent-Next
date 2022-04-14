import * as S from "./styles";
import Image from "next/image";
import { Car } from "@types";
import { ActionButton, ErrorMessage } from "@components";

type Props = {
  activeColor: number;
  car: Car;
};

export const CarDetails = ({ activeColor, car }: Props) => {
  return (
    <S.Container>
      {!car.colors ? (
        <S.ErrorContainer>
          <ErrorMessage message="This car is not available!" />
          <ActionButton back onPress={() => {}} text="Back to catalog" />
        </S.ErrorContainer>
      ) : (
        <>
          <S.Car>
            <S.Header>
              <Image src={car.makeLogo} alt="Car" width={70} height={90} />
              <S.CarInfoWrapper>
                <S.MakeAndModel>{`${car.make} ${car.model}`}</S.MakeAndModel>
                <S.PriceWrapper>
                  <S.PriceSign>$</S.PriceSign>
                  {car.price}/day
                </S.PriceWrapper>
              </S.CarInfoWrapper>
            </S.Header>
            <S.PhotoWrapper>
              <S.CarPhotoWrapper>
                <ActionButton back onPress={() => {}} text="Back to catalog" />
                <S.CarPhoto>
                  <Image
                    src={car.colors[activeColor].photo}
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
            <S.Id>{`${activeColor + 1}`.padStart(2, "0")}</S.Id>
            <S.Color>{car.colors[activeColor].color}</S.Color>
          </S.IdAndColor>
        </>
      )}
    </S.Container>
  );
};
