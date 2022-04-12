import { CarList, Layout, Section } from "@components";
import { getCars } from "@services";
import { Car } from "@types";

type Props = {
  cars: Car[];
};

const Home = ({ cars }: Props) => {
  return (
    <Layout pageTitle="Exotic Cars">
      <Section>
        <CarList cars={cars} />
      </Section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { cars } = await getCars();

  return {
    props: {
      cars,
    },
  };
}
