import { GetStaticPaths, GetStaticProps } from "next";
import { CarDetails, Layout, Section, Slider } from "@components";
import { getCars } from "@services";
import { Car } from "@types";
import { useSlide } from "@hooks";

type Props = {
  car: Car;
};

const Car = ({ car }: Props) => {
  const { activeColor, handleSlideClick } = useSlide();

  return (
    <Layout pageTitle={`${car.make} ${car.model}`}>
      <Section>
        <CarDetails activeColor={activeColor} car={car} />
        {car.colors && (
          <Slider
            activeColor={activeColor}
            colors={car.colors}
            handleSlideClick={handleSlideClick}
          />
        )}
      </Section>
    </Layout>
  );
};

export default Car;

export const getStaticProps: GetStaticProps = async (context) => {
  const carId = context.params?.carId;
  const { cars } = await getCars();
  const car = cars.find((car: Car) => car.id === Number(carId));

  return {
    props: {
      car,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { cars } = await getCars();
  const paths = cars.map((car: Car) => ({
    params: { carId: car.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
