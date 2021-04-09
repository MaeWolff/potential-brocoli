import React from "react";
import { Formik, Form } from "formik";
import { LoginValidationSchema } from "../validationSchemas/authValidationSchema";
import { InputField, Button, Spacer, ButtonSizeEnum } from "../../index";

import { useHistory } from "react-router-dom";
import axios from "axios";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useHistory();

  async function handleSubmit(values: LoginFormValues) {
    await axios
      .post(`http://localhost:3001/auth/login`, {
        email: values.email,
        password: values.password,
      })
      .then(
        (response) => {
          const token = response.data.token;

          if (!token) {
            console.log("authentification failed"); // TODO: set frontend message with UI
          } else {
            router.push("/dashboard");
          }
        },
        (error) => {
          console.log(error);
        }
      );
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
