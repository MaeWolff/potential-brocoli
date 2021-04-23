import React from "react";
import { PriceCard, PriceLabel, Spacer } from "../../index";

export default function PricingSection() {
  return (
    //   {/* // TODO: fix me */}
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <PriceCard name="Gratin de BROCOLI" price={0}>
        <>
          <PriceLabel label="5 parrainages" />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Toutes les fonctionnalités" isLabelCross />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Accès au SAV" isLabelCross />
        </>
      </PriceCard>

      <PriceCard name="Terrine de BROCOLI" price={4.99}>
        <>
          <PriceLabel label="50 parrainages" />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Toutes les fonctionnalités" />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Accès au SAV" />
        </>
      </PriceCard>

      <PriceCard name="Velouté de BROCOLI" price={9.99}>
        <>
          <PriceLabel label="Parrainages illimités" />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Toutes les fonctionnalités" />

          <Spacer axis="vertical" size={1} />

          <PriceLabel label="Accès au SAV" />
        </>
      </PriceCard>
    </div>
  );
}
