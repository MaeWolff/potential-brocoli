import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/svg/FacebookSVG";
import InstagramSVG from "../../assets/svg/InstagramSVG";
import TwitterSVG from "../../assets/svg/TwitterSVG";

import { Spacer, Text } from "../index";

const FooterContainer = styled.footer`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  grid-area: footer;
  padding: 0 var(--body-margin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* TODO: fix this on layout with grid-gap? */
  margin-top: 12em;
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
            ?? propos de{" "}
            <span>
              <Logo to="/">BROCOLI</Logo>
            </span>
          </h4>

          <Spacer axis="vertical" size={1} />

          <Text>
            <em>BROCOLI</em> est une Soci??t?? Anonyme (SA) au capital de
            838???571,80 ??? enti??rement lib??r?? (Siren: 818 353 070 R.C.S. Paris) et
            est r??gie par le code des assurances. Son si??ge social est au 27 Bis
            Rue du Progr??s, 93100 Montreuil.
          </Text>

          <Spacer axis="vertical" size={1} />

          <Text>
            <em>BROCOLI</em> est soumise au contr??le de l???Autorit?? de contr??le
            prudentiel et de r??solution (ACPR), 4 place de Budapest, 75009
            Paris.
          </Text>

          <Spacer axis="vertical" size={1} />

          <Text>
            <em>BROCOLI</em> met ?? la disposition du public son Rapport sur la
            Solvabilit?? et la Situation Financi??re (exercice 2019)
          </Text>
        </FooterInformations>

        <FooterInformations>
          <h4>R??clamation</h4>

          <Spacer axis="vertical" size={1} />

          <Text>
            Vous pouvez nous ??crire en ligne via votre espace personnel ou
            saisir le <em>M??diateur de l???Assurance</em> ?? l???adresse: TSA 50110,
            75441 Paris Cedex 09.
          </Text>
        </FooterInformations>

        <FooterInformations>
          <h4>Mentions l??gales</h4>

          <Spacer axis="vertical" size={1} />

          <Text>
            <em>Editeur :</em> Ce site est produit par <em>BROCOLI SA</em>. Pour
            toute question concernant l???utilisation du site brocoli.fr vous
            pouvez nous contacter directement en ligne.
          </Text>

          <Spacer axis="vertical" size={1} />

          <Text>
            <em>H??bergement :</em> Le site brocoli.fr est h??berg?? par la soci??t??
            Heroku Europe (Heroku Inc., 650 7th Street, San Francisco, CA) sur
            les serveurs d???Amazon Web Services (AWS) Europe.
          </Text>
        </FooterInformations>

        <FooterInformations>
          <Text>
            Les traitements automatis??s relatifs ?? la gestion des informations
            personnelles des clients ou prospects ont fait l???objet d???une
            d??claration (n?? 2004097 v0) aupr??s de la Commission nationale
            informatique et libert?? (CNIL).
          </Text>

          <Spacer axis="vertical" size={1} />

          <Text>
            Conform??ment ?? la loi n?? 78-17, vous b??n??ficiez d'un droit d'acc??s,
            de rectification et d'opposition relatif aux donn??es vous concernant
            ; ce droit peut ??tre exerc?? en adressant un mail ?? l'adresse{" "}
            <em>
              <u>privacy@brocoli.com</u>
            </em>
            .
          </Text>
        </FooterInformations>
      </SectionFooterContainer>
    </FooterContainer>
  );
}
