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
        content="Brocoli est un module de parrainage Shopify, permettant de générer un code privé pour vous et des codes publiques pour vos filleuls. À chaque utilisation du code publique lors d'une commande, le code privé du parrain sera alors crédité."
      />
    </Helmet>
  );
}
