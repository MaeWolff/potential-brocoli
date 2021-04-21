import React, { useState } from "react";
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

const DropDownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const DropDownArrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -0.8em;
  width: 0.4em;
  height: 0.4em;
  border-left: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  border-top: 0.4em solid;
  transform: translate(50%, -35%);
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
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
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
            <a href="/">Prix</a>
          </li>
          <li
            onMouseEnter={() => setIsDropDownOpen(true)}
            onMouseLeave={() => setIsDropDownOpen(false)}
          >
            <a href="/">Développeur</a>
            <DropDownArrow />
            {isDropDownOpen && (
              <DropDownWrapper>
                <li>
                  <a href="/">Documentation</a>
                </li>
                <li>
                  <a href="/">Status</a>
                </li>
              </DropDownWrapper>
            )}
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
