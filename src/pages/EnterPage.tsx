import { useState } from "react";

import styled from "styled-components";
import SignInForm from "../components/forms/SignInForm";
import SignUpForm from "../components/forms/SignUpForm";

import GlobalLayout from "../layouts/GlobalLayout";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: calc(100vh - var(--header-height));
  width: 100%;
`;

const DescriptionContainer = styled.div`
  // TODO: set colors on theme
  background: linear-gradient(
    180deg,
    #743bd2 0%,
    rgba(117, 59, 211, 0.64) 92.71%
  );
  width: 100%;
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

enum EnterState {
  SIGN_IN = "SIGN IN",
  SIGN_UP = "SIGN_UP",
}

export default function EnterPage() {
  const [formState, setFormState] = useState(EnterState.SIGN_IN);

  return (
    <GlobalLayout>
      <Container>
        <DescriptionContainer />

        <FormContainer>
          {formState === EnterState.SIGN_IN && (
            <>
              <h1>
                Bienvenue sur votre <br />
                espace Brocoli
              </h1>

              <SignInForm />

              <NoAccount>
                Vous n'avez pas de compte?{" "}
                <span onClick={() => setFormState(EnterState.SIGN_UP)}>
                  Cliquez-ici
                </span>
              </NoAccount>
            </>
          )}

          {formState === EnterState.SIGN_UP && (
            <>
              <h1>
                Inscrivez-vous dès maintenant
                <br /> à l'espace Brocoli
              </h1>

              <SignUpForm />

              <NoAccount>
                Vous avez déjà un compte?{" "}
                <span onClick={() => setFormState(EnterState.SIGN_IN)}>
                  Cliquez-ici
                </span>
              </NoAccount>
            </>
          )}
        </FormContainer>
      </Container>
    </GlobalLayout>
  );
}
