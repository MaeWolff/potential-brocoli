import React from "react";
import { PricingSection, Spacer, Text, Heading } from "../components/index";
import GlobalLayout from "../layouts/GlobalLayout";

export default function PricingPage() {
  return (
    <GlobalLayout>
      {/* TODO: fix me with grid-gap on layout? */}
      <Spacer axis="vertical" size={1} />

      <Heading as="h1">Choisissez le menu plus adapté !</Heading>

      <Spacer axis="vertical" size={0.5} />

      <Text style={{ maxWidth: "85%" }} align="center">
        Gérez vos parrainages et filleuls de votre boutique grâce à une
        interface complète, facile à piloter.
        <br></br>
        Découvrir les offres pour en savoir plus.
      </Text>

      <Spacer axis="vertical" size={2} />

      <PricingSection />
    </GlobalLayout>
  );
}
