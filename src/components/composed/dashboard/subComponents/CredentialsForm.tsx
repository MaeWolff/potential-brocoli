import { Formik, Form } from "formik";
import axios from "axios";
import styled from "styled-components";

import { useUser } from "../../../../common/hooks/useUser";
import {
  Button,
  ButtonSizeEnum,
  InputField,
  Spacer,
  Text,
} from "../../../index";
import { MixPanel } from "../../../../common/utils/MixPanel";
import { useState } from "react";
import { FlexCenter } from "../../../../styles/config/mixins";
import { CredentialsValidationSchema } from "../../../forms/validationSchemas/credentialsValidationSchema";

const ModalWrapper = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 23;
  ${FlexCenter}

  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
  ${FlexCenter}
  background-color: white;
  max-width: 30em;
  flex-direction: column;
  border-radius: 0.5em;
  padding: 1em 2em;
`;

interface CredentialsShopifyFormValues {
  shopifyName: string;
  shopifyPassword: string;
  shopifyKey: string;
}

export default function CredentialsForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { user, mutate } = useUser();

  async function handleSubmit(values: CredentialsShopifyFormValues) {
    try {
      await axios.patch(
        `http://localhost:3001/user/update-credentials`,
        {
          credentials: [
            {
              shop_name: values.shopifyName,
              shop_password: values.shopifyPassword,
              shop_apiKey: values.shopifyKey,
            },
          ],
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      mutate(user);

      MixPanel.track("Credentials shopify updated");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik
      initialValues={{
        shopifyName: "",
        shopifyPassword: "",
        shopifyKey: "",
      }}
      validationSchema={CredentialsValidationSchema}
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

          <Spacer axis="vertical" size={1} />

          {isModalOpen && (
            <ModalWrapper>
              <Modal>
                <Text align="center">
                  Êtes-vous sûr(e) d'avoir renseigné les bonnes informations au
                  sujet de votre boutique Shopify ?
                </Text>

                <Spacer axis="vertical" size={1} />

                <div style={{ display: "flex" }}>
                  <Button size={ButtonSizeEnum.auto} type="submit">
                    Oui je valide
                  </Button>

                  <Spacer axis="horizontal" size={1} />

                  <Button
                    size={ButtonSizeEnum.auto}
                    handleClick={() => setIsModalOpen(false)}
                  >
                    Non
                  </Button>
                </div>
              </Modal>
            </ModalWrapper>
          )}

          <Button
            size={ButtonSizeEnum.auto}
            type="button"
            handleClick={() => setIsModalOpen(true)}
          >
            Valider mes informations
          </Button>
        </Form>
      )}
    </Formik>
  );
}
