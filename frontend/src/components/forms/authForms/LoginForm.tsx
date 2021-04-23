import React from "react";
import { Formik, Form } from "formik";
import { LoginValidationSchema } from "../validationSchemas/authValidationSchema";
import { InputField, Button, Spacer, ButtonSizeEnum } from "../../index";

import { useHistory } from "react-router-dom";
import fetchUserLogin from "../../../common/fetch/auth/fetchUserLogin";
interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useHistory();

  async function handleSubmit(values: LoginFormValues) {
    const body = {
      email: values.email,
      password: values.password,
    };

    await fetchUserLogin(body);

    router.push("/dashboard");
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={LoginValidationSchema}
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

          <Spacer axis="vertical" size={1} />

          <Button size={ButtonSizeEnum.auto} type="submit">
            Se connecter
          </Button>
        </Form>
      )}
    </Formik>
  );
}
