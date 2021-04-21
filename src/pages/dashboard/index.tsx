import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import styled from "styled-components";
import axios from "axios";

import { useUser } from "../../common/hooks/useUser";
import AuthenticatedRoute from "../../layouts/AuthenticatedRoute";
import GlobalLayout from "../../layouts/GlobalLayout";
import {
  Button,
  ButtonSizeEnum,
  InputField,
  Spacer,
  Text,
  TextLink,
} from "../../components/index";
import { ColorEnum } from "../../theme/ThemeEnums";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CredentialsContainer = styled.div`
  width: 24em;
  background-color: white;
  padding: 1em 2em;
  border-radius: 0.5rem;
  box-shadow: rgb(238 238 238) 0px 10px 30px;
`;

const DescriptionContainer = styled.div`
  width: 40%;
`;

interface CredentialsShopifyFormValues {
  shopifyName: string;
  shopifyPassword: string;
  shopifyKey: string;
}

function notify() {
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default function DashboardPage() {
  const router = useHistory();
  const user = useUser();

  function handleSubmit(values: CredentialsShopifyFormValues) {
    console.log(values);
  }

  function handleLogout() {
    axios.get(`http://localhost:3001/auth/logout`);
    localStorage.removeItem("userToken");

    notify();

    router.push("/");
  }

  return (
    <GlobalLayout>
      <AuthenticatedRoute>
        <>
          Bonjour {user?.data?.email}, bienvenue dans le dashboard
          <button onClick={handleLogout}>test</button>
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

            <CredentialsContainer>
              <Formik
                initialValues={{
                  shopifyName: "",
                  shopifyPassword: "",
                  shopifyKey: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <InputField
                      type="text"
                      placeholder="brocolishop"
                      name="shopifyName"
                      label="Nom de votre boutique"
                      touched={touched.shopifyName}
                      error={errors.shopifyName}
                    />

                    <Spacer axis="vertical" size={1} />

                    <InputField
                      type="password"
                      placeholder="*******"
                      name="shopifyPassword"
                      label="Mot de passe associé"
                      touched={touched.shopifyPassword}
                      error={errors.shopifyPassword}
                    />

                    <Spacer axis="vertical" size={1} />

                    <InputField
                      type="text"
                      placeholder="eDPsehDzMd2jd"
                      name="shopifyKey"
                      label="API KEY"
                      touched={touched.shopifyKey}
                      error={errors.shopifyKey}
                    />
                  </Form>
                )}
              </Formik>

              <Spacer axis="vertical" size={1} />

              <Button size={ButtonSizeEnum.auto} type="submit">
                Valider mes informations
              </Button>
            </CredentialsContainer>
          </Container>
        </>
      </AuthenticatedRoute>
    </GlobalLayout>
  );
}
