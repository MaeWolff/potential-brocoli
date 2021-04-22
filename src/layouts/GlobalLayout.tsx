import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/index";
import { Footer } from "../components/index";

const Layout = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 100% 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "Header Header Header"
    ".      Main        ."
    ".      footer      .";
`;

const Main = styled.main<{ fullWidth?: boolean }>`
  margin-top: 1em;
  grid-area: Main;
  display: grid;
  grid-row-gap: 1em;
  width: 100%;
  justify-items: center;
  padding: ${({ fullWidth }) => (fullWidth ? "0" : "0 var(--body-margin)")};
`;

type Props = {
  children: ReactNode;
  fullWidth?: boolean;
};

export default function GlobalLayout({ children, fullWidth }: Props) {
  return (
    <Layout>
      <Header />

      <Main fullWidth={fullWidth}>{children}</Main>
      <Footer />
    </Layout>
  );
}
