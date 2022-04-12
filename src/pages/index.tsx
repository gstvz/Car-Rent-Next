import type { NextPage } from "next";
import { CarList, Layout, Section } from "@components";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Exotic Cars">
      <Section>
        <CarList />
      </Section>
    </Layout>
  );
};

export default Home;
