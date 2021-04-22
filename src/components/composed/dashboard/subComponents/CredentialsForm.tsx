import { Formik, Form } from "formik";
import axios from "axios";

import { useUser } from "../../../../common/hooks/useUser";
import { Button, ButtonSizeEnum, InputField, Spacer } from "../../../index";
import { MixPanel } from "../../../../common/utils/MixPanel";

interface CredentialsShopifyFormValues {
  shopifyName: string;
  shopifyPassword: string;
  shopifyKey: string;
}

export default function CredentialsForm() {
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

          <Button size={ButtonSizeEnum.auto} type="submit">
            Valider mes informations
          </Button>
        </Form>
      )}
    </Formik>
  );
}
