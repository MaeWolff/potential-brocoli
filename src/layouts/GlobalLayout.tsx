import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/index";

const Layout = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr min(75em, 100%) 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "Header Header Header"
    ".      Main   .";
`;

const Main = styled.main`
  grid-area: Main;
  display: grid;
  grid-row-gap: 1em;
  width: 100%;
  justify-items: center;
`;

type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <Layout>
      <Header />

      <Main>{children}</Main>
    </Layout>
  );
}
