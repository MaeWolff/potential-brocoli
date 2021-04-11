import React from "react";
import styled from "styled-components";
import { ColorEnum } from "../../../../theme/ThemeEnums";
import { Heading, Text, ButtonSizeEnum, Button, Spacer } from "../../../index";
import { BackgroundPrimaryText } from "../../../../styles/config/mixins";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 7px 53px rgba(0, 0, 0, 0.07),
    0px 3.23631px 24.5035px rgba(0, 0, 0, 0.0519173),
    0px 1.85174px 14.0203px rgba(0, 0, 0, 0.0438747),
    0px 1.124px 8.51025px rgba(0, 0, 0, 0.0377964),
    0px 0.677257px 5.1278px rgba(0, 0, 0, 0.0322036),
    0px 0.37714px 2.85549px rgba(0, 0, 0, 0.0261253),
    0px 0.162205px 1.22813px rgba(0, 0, 0, 0.0180827);
  padding: 2em;
`;

const PriceName = styled(Heading)`
  font-weight: 500;
  ${BackgroundPrimaryText};
`;

const LabelWrapper = styled.div``;

type PriceProps = {
  children: JSX.Element;
  name: string;
  price: number;
};

export default function PriceCard({ name, price, children }: PriceProps) {
  return (
    <Card>
      <PriceName as="h3" color={ColorEnum.primary}>
        {name}
      </PriceName>

      <Spacer axis="vertical" size={2} />

      <Text>
        {price} &euro;
        <Text as="span" display="inline-block">
          /mois
        </Text>
      </Text>

      <Spacer axis="vertical" size={2} />

      <LabelWrapper>{children}</LabelWrapper>

      <Spacer axis="vertical" size={1} />

      <Button size={ButtonSizeEnum.auto}>Nous contacter</Button>
    </Card>
  );
}
