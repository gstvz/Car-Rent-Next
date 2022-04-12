import { CarList, Layout, ScrollButton, Section } from "@components";
import { useScrollToTop } from "@hooks";
import { getCars } from "@services";
import { Car } from "@types";

type Props = {
  cars: Car[];
};

const Home = ({ cars }: Props) => {
  const { visibility, scrollToTop } = useScrollToTop();

  return (
    <Layout pageTitle="Exotic Cars">
      <Section>
        <CarList cars={cars} />
        {visibility && <ScrollButton scrollToTop={scrollToTop} />}
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
