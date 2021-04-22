import { useHistory } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "../components/forms/authForms/RegisterForm";

import { Spacer, HeadTag } from "../components/index";

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
    text-align: center;
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

export default function RegisterPage() {
  const router = useHistory();

  return (
    <GlobalLayout fullWidth>
      <HeadTag title="Inscription" />
      <Container>
        <DescriptionContainer />

        <FormContainer>
          <h1>
            Inscrivez-vous dès maintenant
            <br /> à l'espace Brocoli
          </h1>

          <Spacer axis="vertical" size={2} />

          <RegisterForm />

          <Spacer axis="vertical" size={1} />

          <NoAccount>
            Vous avez déjà un compte?{" "}
            <span onClick={() => router.push("/login")}>Cliquez-ici</span>
          </NoAccount>
        </FormContainer>
      </Container>
    </GlobalLayout>
  );
}
