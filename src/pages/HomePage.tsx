import React from "react";
import styled from "styled-components"
import Header from "../components/composed/Header";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
`

export default function HomePage() {
  return (
    <div>
      <Header />

      <HeroContainer>
          <HeroTitle> <span>Implémentez</span> dès maintenant votre module de  <span> parrainage </span> Shopify</HeroTitle>
          <HeroDiv></HeroDiv>
      </HeroContainer>

    </div>
  );
}
