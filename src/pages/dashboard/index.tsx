/* eslint-disable no-template-curly-in-string */
import styled from "styled-components";
import axios from "axios";

import Prism from "prismjs";
import "../../styles/prism.css";

import { useUser } from "../../common/hooks/useUser";
import AuthenticatedRoute from "../../layouts/AuthenticatedRoute";
import GlobalLayout from "../../layouts/GlobalLayout";
import {
  Spacer,
  HeadTag,
  Heading,
  Text,
  TextLink,
  UserCredentials,
} from "../../components/index";
import { ColorEnum } from "../../theme/ThemeEnums";
import { MixPanel } from "../../common/utils/MixPanel";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  width: 40%;
`;

const HeadingScript = styled(Heading)`
  font-weight: 600;
`;

export default function DashboardPage() {
  const { user } = useUser();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function handleLogout() {
    axios.get(`http://localhost:3001/auth/logout`);
    localStorage.removeItem("userToken");

    // TODO: setup react-toastify?

    MixPanel.track("Logout");
    window.location.reload();
  }

  return (
    <GlobalLayout>
      <HeadTag title="Tableau de bord" />
      <AuthenticatedRoute>
        <>
          Bonjour {user?.email}, bienvenue dans le dashboard
          <button onClick={handleLogout}>se déconnecter</button>
          <Spacer axis="vertical" size={3} />
          <Container>
            <DescriptionContainer>
              <h2>Informations à propos de votre Shopify</h2>

              <Spacer axis="vertical" size={2} />

              <Text>
                Afin de récupérer le code lié au module de parrainage Brocoli il
                nous faut des informations concernant votre boutique Shopify.
              </Text>

              <Spacer axis="vertical" size={2} />

              <Text>
                Toutes les informations renseignées ici seront cryptées et
                seulement utilisées pour l'utilisation de l'API Brocoli.
              </Text>

              <Spacer axis="vertical" size={2} />

              <TextLink to="/" color={ColorEnum.primary}>
                Comment implémenter le module Brocoli ?
              </TextLink>
            </DescriptionContainer>

            <Spacer axis="horizontal" size={4} />

            <UserCredentials />
          </Container>
          <Spacer axis="vertical" size={8} />
          {user?.credentials[0] && (
            <>
              <HeadingScript as="h3" align="center">
                🥦 Voici votre script unique à copier/coller
                <br />
                dans l'onglet "Script personnalisé" de votre boutique Shopify
              </HeadingScript>

              <Spacer axis="vertical" size={0.5} />

              <pre>
                <code className="language-javascript">
                  {`<script defer>
const checkout = window.Shopify.checkout

if (checkout.discount.code) {
  fetch(${"`"}https://api.brocoli.fr/customers/sponsor?discountCode=${"${checkout.discount.code}"}
  &discountAmount=${"${checkout.discount.amount}"}&customerId=${"${checkout.customer_id}"}
  &orderId=${"${checkout.order_id}"}&uuid=${user?.uuid}${"`"}, {
      method: "PATCH"
      })
  }
</script>
`}
                </code>
              </pre>
            </>
          )}
        </>
      </AuthenticatedRoute>
    </GlobalLayout>
  );
}
