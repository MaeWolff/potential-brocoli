import { Formik, Form } from "formik";
import {
  RegisterValidationSchema,
  // SubscriptionName,
} from "../validationSchemas/authValidationSchema";
import { InputField, Button, ButtonSizeEnum, Spacer } from "../../index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { MixPanel } from "../../../common/utils/MixPanel";

// enum SubscriptionNameLocaleEnum {
//   GRATIN = "Gratin (gratuit)",
//   TERRINE = "Terrine (4,99 €)",
//   VELVETY = "Velouté (9,99€)",
// }
interface RegisterFormValues {
  email: string;
  password: string;
  // subscription: SubscriptionName;
}

export default function RegisterForm() {
  const router = useHistory();

  async function handleSubmit(values: RegisterFormValues) {
    try {
      await axios.post(`http://localhost:3001/auth/register`, {
        email: values.email,
        password: values.password,
        // subscription: values.subscription,
      });

      MixPanel.identify(values.email);
      MixPanel.track("Successful register");
      MixPanel.people.set({
        $email: values.email,
      });

      router.push("/login");
    } catch (err) {
      MixPanel.track("Unsuccessful register");
      console.log(err);
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <InputField
            type="email"
            placeholder="mae@potential-brocoli.io"
            name="email"
            label="Email"
            touched={touched.email}
            error={errors.email}
          />

          <InputField
            type="password"
            name="password"
            placeholder="*********"
            label="Mot de passe"
            touched={touched.password}
            error={errors.password}
          />

          <InputField
            type="password"
            name="passwordConfirmation"
            placeholder="*********"
            label="Confirmez le mot de passe"
            touched={touched.passwordConfirmation}
            error={errors.passwordConfirmation}
          />

          {/* TODO: style me */}
          {/* <label htmlFor="subscription">Choissisez votre menu</label>

          <select name="subscription">
            <option value={SubscriptionName.GRATIN}>
              {SubscriptionNameLocaleEnum.GRATIN}
            </option>
            <option value={SubscriptionName.TERRINE} disabled>
              {SubscriptionNameLocaleEnum.TERRINE}
            </option>
            <option value={SubscriptionName.VELVETY} disabled>
              {SubscriptionNameLocaleEnum.VELVETY}
            </option>
          </select> */}

          <Spacer axis="vertical" size={1} />

          <Button size={ButtonSizeEnum.auto} type="submit">
            S'inscrire
          </Button>
        </Form>
      )}
    </Formik>
  );
}
