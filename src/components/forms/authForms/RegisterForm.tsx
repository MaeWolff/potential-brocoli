import React from "react";
import { Formik, Form } from "formik";
import { AuthValidationSchema } from "../validationSchemas/authValidationSchema";
import { InputField, Button, ButtonSizeEnum, Spacer } from "../../index";

export default function RegisterForm() {
  function handleSubmit() {
    console.log("ui");
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={handleSubmit}
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
