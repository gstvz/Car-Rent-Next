import {
  CarList,
  ErrorMessage,
  Layout,
  ScrollButton,
  Section,
} from "@components";
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
        {cars.length === 0 ? (
          <ErrorMessage message="There are no cars available!" />
        ) : (
          <CarList cars={cars} />
        )}
        {visibility && <ScrollButton scrollToTop={scrollToTop} />}
      </Section>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { cars } = await getCars();

  return {
    props: {
      cars,
    },
  };
};
