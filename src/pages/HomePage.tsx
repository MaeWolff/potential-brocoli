import React, { useEffect } from "react";
import styled from "styled-components";
import { ButtonSizeEnum } from "../components/base/Button";
import Prism from "prismjs";
import "../styles/prism.css";

import {
  Spacer,
  Button,
  Heading,
  PriceCard,
  HeadTag,
  Text,
  PriceLabel,
} from "../components/index";
import GlobalLayout from "../layouts/GlobalLayout";
import { ColorEnum } from "../theme/ThemeEnums";

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

const PricesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function HomePage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlobalLayout>
      <HeadTag title="Page d'accueil" />
      <HeroContainer>
        <div>
          <HeroTitle>
            <span>Implémentez</span> dès maintenant votre module de{" "}
            <span> parrainage </span> Shopify
          </HeroTitle>

          <Spacer axis="vertical" size={2} />

          {/* TODO: fixme */}
          <Text style={{ maxWidth: "80%" }}>
            7000 entreprises de toutes tailles, des start-ups aux grandes
            entreprises, et des milliers d’indépendants font confiance à Brocoli
            pour parrainer leurs boutiques.
          </Text>

          <Spacer axis="vertical" size={2} />

          <Button size={ButtonSizeEnum.auto}>Voir la documentation</Button>
        </div>

        <HeroDiv />
      </HeroContainer>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <pre>
          <code className="language-javascript">
            {`<script defer>
const checkout = window.Shopify.checkout 
            
// Notre code ici 🥦   
// Le script est directement récupérable dans votre 
// espace Brocoli
</script>
`}
          </code>
        </pre>

        <div style={{ maxWidth: "40%" }}>
          <Heading as="h2" color={ColorEnum.primary}>
            Que vous soyez commercant ou développeur, notre solution est facile
            à mettre en place
          </Heading>

          <Spacer axis="vertical" size={2} />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            feugiat augue semper tempus sit id id porta elementum. Tellus donec
            diam fames ut eget.
          </Text>

          <Spacer axis="vertical" size={2} />

          <Button size={ButtonSizeEnum.auto}>Voir la documentation</Button>
        </div>
      </div>

      <Spacer axis="vertical" size={8} />

      <PricesSection>
        <Heading as="h2">Choisissez le menu plus adapté !</Heading>

        <Spacer axis="vertical" size={0.5} />

        <Text style={{ maxWidth: "85%" }} align="center">
          Gérez vos parrainages et filleuls de votre boutique grâce à une
          interface complète, facile à piloter.
          <br></br>
          Découvrir les offres pour en savoir plus.
        </Text>

        <Spacer axis="vertical" size={3} />

        {/* TODO: fix me */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <PriceCard name="Gratin de BROCOLI" price={0}>
            <>
              <PriceLabel label="5 parrainages" />

              <PriceLabel label="Toutes les fonctionnalités" isLabelCross />

              <PriceLabel label="Accès au SAV" isLabelCross />
            </>
          </PriceCard>

          <Spacer axis="horizontal" size={2} />

          <PriceCard name="Terrine de BROCOLI" price={4.99}>
            <>
              <PriceLabel label="50 parrainages" />

              <PriceLabel label="Toutes les fonctionnalités" />

              <PriceLabel label="Accès au SAV" />
            </>
          </PriceCard>

          <Spacer axis="horizontal" size={2} />

          <PriceCard name="Velouté de BROCOLI" price={9.99}>
            <>
              <PriceLabel label="Parrainages illimités" />

              <PriceLabel label="Toutes les fonctionnalités" />

              <PriceLabel label="Accès au SAV" />
            </>
          </PriceCard>
        </div>
      </PricesSection>

      <Spacer axis="vertical" size={5} />
    </GlobalLayout>
  );
}
