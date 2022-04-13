import * as S from "./styles";
import { Card } from "@components";
import { Car } from "@types";
import { useRedirectToCar } from "@hooks";

type Props = {
  cars: Car[];
};

export const CarList = ({ cars }: Props) => {
  const { redirectToCar } = useRedirectToCar();

  return (
    <S.Container>
      <S.CarList>
        {cars.map((car) => (
          <Card key={car.id} car={car} onPress={redirectToCar} />
        ))}
      </S.CarList>
    </S.Container>
  );
};
