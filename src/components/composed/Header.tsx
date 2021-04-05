import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, ButtonSizeEnum } from "../index";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  grid-area: Header;
  width: 100%;
  padding: 0 var(--body-margin);
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  li:not(:last-child) {
    margin-right: 3em;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <p>BROCOLI</p>
      <nav>
        <LinksWrapper>
          <li>
            <a href="/">Produit</a>
          </li>
          <li>
            <a href="/">Prix</a>
          </li>
          <li>
            <a href="/">Développeur</a>
            <ul>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Status</a>
              </li>
            </ul>
          </li>
        </LinksWrapper>
      </nav>

      <Link to="/enter">
        <Button size={ButtonSizeEnum.auto}>Connexion</Button>
      </Link>
    </HeaderContainer>
  );
}
