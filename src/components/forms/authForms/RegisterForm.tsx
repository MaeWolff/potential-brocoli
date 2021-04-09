import React from "react";
import { Formik, Form } from "formik";
import { AuthValidationSchema } from "../validationSchemas/authValidationSchema";
import { InputField, Button, ButtonSizeEnum, Spacer } from "../../index";
import axios from "axios";

interface RegisterFormValues {
  email: string;
  password: string;
}

type Props = {
  nextStep: () => void;
};

export default function RegisterForm({ nextStep }: Props) {
  //
  async function handleSubmit(values: RegisterFormValues) {
    await axios.post(`http://localhost:3001/auth/register`, {
      email: values.email,
      password: values.password,
    });

    nextStep();
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={AuthValidationSchema}
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

          <Spacer axis="vertical" size={1} />

          <Button size={ButtonSizeEnum.auto} type="submit">
            Se connecter
          </Button>
        </Form>
      )}
    </Formik>
  );
}
