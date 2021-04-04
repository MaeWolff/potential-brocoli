import React from "react";
import styled from "styled-components";
import { ButtonSizeEnum } from "../components/base/Button";

import { Spacer, Button } from "../components/index";
import GlobalLayout from "../layouts/GlobalLayout";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.4em;
  max-width: 15em;
  height: fit-content;

  span {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary100};
    padding: 0em 0.25em;
    border-radius: 8px;
  }
`;

const HeroDiv = styled.div`
  min-width: 30em;
  height: 30em;
  // TODO: set colors on theme
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary} 0%,
    rgba(117, 59, 211, 0.64) 92.71%
  );
  border-radius: 8px;
`;

export default function HomePage() {
  return (
    <GlobalLayout>
      <HeroContainer>
        <div>
          <HeroTitle>
            <span>Implémentez</span> dès maintenant votre module de{" "}
            <span> parrainage </span> Shopify
          </HeroTitle>

          <Spacer axis="vertical" size={2} />

          {/* TODO: fixme */}
          <p style={{ maxWidth: "80%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            feugiat augue semper tempus sit id id porta elementum. Tellus donec
            diam fames ut eget. A, sit nulla in non. Ultrices mi cras in ut
            integer porttitor. In enim a egestas sit elit sit.
          </p>

          <Spacer axis="vertical" size={2} />

          <Button size={ButtonSizeEnum.auto}>Voir la documentation</Button>
        </div>

        <HeroDiv />
      </HeroContainer>
    </GlobalLayout>
  );
}
