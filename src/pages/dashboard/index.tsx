import styled from "styled-components";
import axios from "axios";

import { useUser } from "../../common/hooks/useUser";
import AuthenticatedRoute from "../../layouts/AuthenticatedRoute";
import GlobalLayout from "../../layouts/GlobalLayout";
import {
  Spacer,
  HeadTag,
  Text,
  TextLink,
  UserCredentials,
} from "../../components/index";
import { ColorEnum } from "../../theme/ThemeEnums";
import { MixPanel } from "../../common/utils/MixPanel";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  width: 40%;
`;

export default function DashboardPage() {
  const { user } = useUser();

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
        </>
      </AuthenticatedRoute>
    </GlobalLayout>
  );
}
