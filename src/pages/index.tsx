import { CarList, Layout, Section } from "@components";
import { Car } from "@types";
import { createFilePath, readFile } from "@utils";

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
  const filePath = createFilePath();
  const fileData = readFile(filePath);

  return {
    props: {
      cars: fileData.cars,
    },
  };
}
