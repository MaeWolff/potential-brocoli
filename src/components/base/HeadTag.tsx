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
        content="Brocoli est un module de parrainage shopify, permmettant de génerer un code privé des codes publiques pour votre parain. A chaque utilisation des code publique lors d'une commande, le code privé de votre parain sera alors crédité"
      />
    </Helmet>
  );
}