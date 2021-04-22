import React from "react";
import styled from "styled-components";
import CheckedSVG from "../../../../assets/svg/CheckedSVG";
import CrossSVG from "../../../../assets/svg/CrossSVG";
import { Spacer, Text } from "../../../index";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 1em;
    height: 1em;
  }
`;

type LabelProps = {
  isLabelCross?: boolean;
  label: string;
};

const PriceLabel = ({ isLabelCross, label }: LabelProps) => {
  return (
    <Container>
      {isLabelCross ? <CrossSVG /> : <CheckedSVG />}

      <Spacer axis="horizontal" size={0.5} />

      <Text>{label}</Text>
    </Container>
  );
};

export default PriceLabel;
