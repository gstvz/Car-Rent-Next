import * as S from "./styles";
import { Card } from "@components";
import { Car } from "@types";

type Props = {
  cars: Car[];
};

export const CarList = ({ cars }: Props) => {
  return (
    <S.Container>
      <S.CarList>
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </S.CarList>
    </S.Container>
  );
};
