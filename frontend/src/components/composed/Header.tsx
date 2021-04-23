import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, ButtonSizeEnum, Spacer } from "../index";
import { FlexCenter } from "../../styles/config/mixins";

import { useUser } from "../../common/hooks/useUser";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  grid-area: Header;
  width: 100%;
  padding: 0 var(--body-margin);
  /* TODO: fixme */
  /* position: sticky; */
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgb(236, 236, 236);
`;

const Logo = styled(Link)`
  font-weight: 600;
  cursor: pointer;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    position: relative;

    &:not(:last-child) {
      margin-right: 3em;
    }
  }
`;

const UserProfile = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  ${FlexCenter}
`;

export default function Header() {
  const { user } = useUser();

  return (
    <HeaderContainer>
      <Logo to="/">BROCOLI</Logo>
      <nav>
        <LinksWrapper>
          <li>
            <a href="/">Produit</a>
          </li>
          <li>
            <a href="/pricing">Prix</a>
          </li>
          <li>
            <a href="/">Tutoriel</a>
          </li>
        </LinksWrapper>
      </nav>

      {!user && (
        <Link to="/login">
          <Button size={ButtonSizeEnum.auto}>Connexion</Button>
        </Link>
      )}

      {user && (
        <Link to="/dashboard">
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <p>{user?.email}</p>

            <Spacer axis="horizontal" size={1} />

            <UserProfile>{user?.email.substr(0, 1).toUpperCase()}</UserProfile>
          </div>
        </Link>
      )}
    </HeaderContainer>
  );
}
