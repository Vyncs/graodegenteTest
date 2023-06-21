import Image from "next/image";
import { ReactNode } from "react";
import { BoldText, CircleIcon, ContainerColumn, NormalText } from "./style";

export interface InfosSend {
  icon: ReactNode;
  boldText: string;
  normalText: string;
}

function InfosSendComponent({ icon, boldText, normalText }: InfosSend) {
  return (
    <>
    <ContainerColumn>
      <CircleIcon>{icon}</CircleIcon>
      <BoldText>{boldText}</BoldText>
      <NormalText>{normalText}</NormalText>
    </ContainerColumn>
    </>
  );
}

export default InfosSendComponent;
