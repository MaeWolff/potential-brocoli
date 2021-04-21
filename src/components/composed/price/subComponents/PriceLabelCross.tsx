import React from "react";
import styled from "styled-components";
import CrossSVG from "../../../../assets/svg/CrossSVG";
import Spacer from "../../../base/Spacer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`;

type LabelProps = {
  label: string;
};

const PriceLabelCross = ({ label }: LabelProps) => {
  return (
    <Container>
      <CrossSVG />
      <Spacer axis="horizontal" size={1} />
      <p>{label}</p>
      <Spacer axis="vertical" size={3} />
    </Container>
  );
};

export default PriceLabelCross;
