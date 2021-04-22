import React from "react";
import { Helmet } from "react-helmet";

type HeadProps = {
  title?: string;
};

export default function HeadTag({ title }: HeadProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Brocoli - {title}</title>

      <meta name="title" content="Brocoli - le module de parrainage shopify" />
      <meta
        name="description"
        content="Brocoli est un module de parrainage shopify, permettent de générer un code privé des codes publiques pour votre parrain. À chaque utilisation des codes publique lors d'une commande, le code privé de votre parrain sera alors crédité.

        "
      />
    </Helmet>
  );
}