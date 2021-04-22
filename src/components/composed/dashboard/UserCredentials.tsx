import styled from "styled-components";
import { Spacer, Text } from "../../index";
import { useUser } from "../../../common/hooks/useUser";
import { ColorEnum } from "../../../theme/ThemeEnums";

import CredentialsForm from "./subComponents/CredentialsForm";

const CredentialsContainer = styled.div`
  width: 24em;
  height: fit-content;
  background-color: white;
  padding: 1em 2em;
  border-radius: 0.5rem;
  box-shadow: rgb(238 238 238) 0px 10px 30px;
`;

export default function UserCredentials() {
  const { user } = useUser();

  return (
    <>
      {user?.credentials[0] && (
        <>
          <CredentialsContainer>
            <h3>Vos informations</h3>

            <Spacer axis="vertical" size={1} />

            {/* TODO: refacto with readonly on input */}
            <Text>Nom de ta boutique</Text>
            <Text color={ColorEnum.primary}>
              {user.credentials[0]?.shop_name}
            </Text>

            <Spacer axis="vertical" size={0.5} />

            <Text>Mot de passe associé</Text>
            <Text color={ColorEnum.primary}>
              {user.credentials[0]?.shop_password}
            </Text>

            <Spacer axis="vertical" size={0.5} />

            <Text>API KEY</Text>
            <Text color={ColorEnum.primary}>
              {user.credentials[0]?.shop_apiKey}
            </Text>
          </CredentialsContainer>

          {/* TODO: add script here */}
        </>
      )}

      {!user?.credentials[0] && (
        <CredentialsContainer>
          <CredentialsForm />
        </CredentialsContainer>
      )}
    </>
  );
}
