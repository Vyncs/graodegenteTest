import { memo } from "react";
import InfosSendComponent from "./core";
import { CreditCard, Lightning, Package, Tag } from "phosphor-react";
import { ContainerInfosSend } from "./style";

const component = () => {
  return (
    <>
    <ContainerInfosSend>
        <InfosSendComponent icon={<CreditCard size={42} color="#57B0AF"/>} boldText="Em até 12X" normalText="no Cartão"/>
        <InfosSendComponent icon={<Lightning size={42} color="#57B0AF"/>} boldText="Chega Rapidinho" normalText="envio em até 24H*"/>
        <InfosSendComponent icon={<Tag size={42} color="#57B0AF"/>} boldText="5% de desconto" normalText="nas compras à vista"/>
        <InfosSendComponent icon={<Package size={42} color="#57B0AF"/>} boldText="30 dias para a troca" normalText="ou 100% do seu dinheiro de volta!"/>
    </ContainerInfosSend>
    </>
  );
};

export const InfosSend = memo(component);
