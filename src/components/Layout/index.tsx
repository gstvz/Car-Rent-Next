import * as S from "./styles";
import { Header } from "@components";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

export const Layout = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
};
