import { GetStaticPaths, GetStaticProps } from "next";
import { CarDetails, Layout, Section } from "@components";
import { getCars } from "@services";
import { Car } from "@types";

type Props = {
  car: Car;
};

const Car = ({ car }: Props) => {
  return (
    <Layout pageTitle="Car">
      <Section>
        <CarDetails car={car} />
      </Section>
    </Layout>
  );
};

export default Car;

export const getStaticProps: GetStaticProps = async (context) => {
  const carId = context.params?.carId;
  const { cars } = await getCars();
  const car = cars.find((car) => car.id === Number(carId));

  return {
    props: {
      car,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { cars } = await getCars();
  const paths = cars.map((car) => ({
    params: { carId: car.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
