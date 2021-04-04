import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;
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
          </li>
        </LinksWrapper>
      </nav>

      <Link to="/login">
        <button>Connexion</button>
      </Link>
    </HeaderContainer>
  );
}
