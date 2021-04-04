import React from "react";
import { Formik, Form } from "formik";
import { AuthValidationSchema } from "./validationSchemas/authValidationSchema";
import { InputField } from "../index";

export default function SignInForm() {
  function handleSubmit() {
    console.log("ui");
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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

          <button type="submit">Se connecter</button>
        </Form>
      )}
    </Formik>
  );
}