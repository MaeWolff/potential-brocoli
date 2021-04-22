import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/svg/FacebookSVG";
import InstagramSVG from "../../assets/svg/InstagramSVG";
import TwitterSVG from "../../assets/svg/TwitterSVG";
import Spacer from "../base/Spacer";

const FooterContainer = styled.footer`
  height: 30em;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  grid-area: footer;
  padding: 0 var(--body-margin);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroFooterContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2em;
  align-items: center;
  width: 100%;
`;

const Logo = styled(Link)`
  font-weight: 600;
  cursor: pointer;
`;

const IconsWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    position: relative;

    &:not(:last-child) {
      margin-right: 1em;
    }
  }
`;

const SectionFooterContainer = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  margin-top: 1em;
  margin-bottom: 5em;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  h4 {
    font-weight: 600;
    font-size: 0.9em;
    flex-direction: column;
  }
`;

const FooterInformations = styled.footer`
  display: flex;
  width: 18em;
  flex-direction: column;

  &:last-child {
    margin-top: 1.5em;
  }

  p {
    font-weight: 300;
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.grey};
    em {
      font-weight: 600;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <HeroFooterContainer>
        <Logo to="/">BROCOLI</Logo>

        <IconsWrapper>
          <li>
            <FacebookSVG />
          </li>
          <li>
            <InstagramSVG />
          </li>
          <li>
            <TwitterSVG />
          </li>
        </IconsWrapper>
      </HeroFooterContainer>

      <SectionFooterContainer>
        <FooterInformations>
          <h4>
            À propos de <Logo to="/">BROCOLI</Logo>
          </h4>

          <p>
            <em>BROCOLI</em> est une Société Anonyme (SA) au capital de
            838 571,80 € entièrement libéré (Siren: 818 353 070 R.C.S. Paris) et
            est régie par le code des assurances. Son siège social est au 27 Bis
            Rue du Progrès, 93100 Montreuil.
            <Spacer axis="vertical" size={1} />
            <em>BROCOLI</em> est soumise au contrôle de l’Autorité de contrôle
            prudentiel et de résolution (ACPR), 4 place de Budapest, 75009
            Paris.
            <Spacer axis="vertical" size={1} />
            <em>BROCOLI</em> met à la disposition du public son Rapport sur la
            Solvabilité et la Situation Financière (exercice 2019)
          </p>
        </FooterInformations>

        <FooterInformations>
          <h4>Réclamation</h4>

          <p>
            Vous pouvez nous écrire en ligne via votre espace personnel ou
            saisir le <em>Médiateur de l’Assurance</em> à l’adresse: TSA 50110,
            75441 Paris Cedex 09.
          </p>
        </FooterInformations>

        <FooterInformations>
          <h4>Mentions légales</h4>

          <p>
            <em>Editeur :</em> Ce site est produit par <em>BROCOLI SA</em>. Pour
            toute question concernant l’utilisation du site alan.com vous pouvez
            nous contacter directement en ligne.
            <Spacer axis="vertical" size={1} />
            <em>Hébergement :</em> Le site brocoli.fr est hébergé par la société
            Heroku Europe (Heroku Inc., 650 7th Street, San Francisco, CA) sur
            les serveurs d’Amazon Web Services (AWS) Europe.
          </p>
        </FooterInformations>

        <FooterInformations>
          <p>
            Les traitements automatisés relatifs à la gestion des informations
            personnelles des clients ou prospects ont fait l’objet d’une
            déclaration (n° 2004097 v0) auprès de la Commission nationale
            informatique et liberté (CNIL).
            <Spacer axis="vertical" size={1} />
            Conformément à la loi n° 78-17, vous bénéficiez d'un droit d'accès,
            de rectification et d'opposition relatif aux données vous concernant
            ; ce droit peut être exercé en adressant un mail à l'adresse{" "}
            <em>
              <u>privacy@brocoli.com</u>
            </em>
            .
          </p>
        </FooterInformations>
      </SectionFooterContainer>
    </FooterContainer>
  );
}
