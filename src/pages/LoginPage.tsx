import { Formik, Form } from "formik";
import { LoginValidationSchema } from "../components/forms/validationSchemas/loginValidationSchema";
import { InputField } from "../components/index";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
`;

const DescriptionContainer = styled.div`
  // TODO: set colors on theme
  background: linear-gradient(
    180deg,
    #743bd2 0%,
    rgba(117, 59, 211, 0.64) 92.71%
  );
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    width: 100%;
    height: 2.5em;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 0;
    border-radius: 0.5em;
  }

  Form {
    min-width: 16em;
  }
`;

const NoAccount = styled.p`
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function LoginPage() {
  function handleSubmit() {
    console.log("cc");
  }

  return (
    <Container>
      <DescriptionContainer />

      <FormContainer>
        <h1>
          Bienvenue sur votre <br />
          espace Brocoli
        </h1>

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

        <NoAccount>
          Vous n'avez pas de compte? <span>Cliquez-ici</span>
        </NoAccount>
      </FormContainer>
    </Container>
  );
}
