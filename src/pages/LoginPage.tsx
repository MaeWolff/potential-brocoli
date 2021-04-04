import React from "react";
import { Formik, Form, Field } from "formik";
import { LoginValidationSchema } from "../components/forms/validationSchemas/loginValidationSchema";

export default function LoginPage() {
  function handleSubmit() {
    console.log("cc");
  }

  return (
    <div>
      <h1>Login page</h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <>
              <Field name="email" type="email" />

              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </>

            <>
              <Field name="password" type="password" />

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
