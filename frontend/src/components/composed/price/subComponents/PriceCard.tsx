import React from "react";
import styled from "styled-components";
import { ColorEnum } from "../../../../theme/ThemeEnums";
import { Heading, Text, ButtonSizeEnum, Button, Spacer } from "../../../index";
import { BackgroundPrimaryText } from "../../../../styles/config/mixins";

const Card = styled.div`
  width: 22em;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  box-shadow: rgb(238 238 238) 0px 10px 30px;
  padding: 2em;
  border-radius: 0.5em;
`;

const PriceName = styled(Heading)`
  font-weight: 500;
  ${BackgroundPrimaryText};
`;

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

      <div>{children}</div>

      <Spacer axis="vertical" size={3} />

      <Button size={ButtonSizeEnum.auto}>Nous contacter</Button>
    </Card>
  );
}
