import * as S from "./styles";
import { Header } from "@components";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

export const Layout = ({ children, pageTitle }: LayoutProps) => {
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
