import { memo } from "react";
import { FooterContainer, GridImages, ImageRadius } from "./style";
import Image from "next/image";
import produto1 from '../../assets/footer/footer1.png'
import produto2 from '../../assets/footer/footer2.png'
import produto3 from '../../assets/footer/footer3.png'
import produto4 from '../../assets/footer/footer4.png'

const component = () => {
  return (
    <FooterContainer>
      <h1>@grãodegente</h1>
      <GridImages>
        <ImageRadius src={produto1} alt="" height={220}/>
        <ImageRadius src={produto2} alt="" height={220}/>
        <ImageRadius src={produto3} alt="" height={220}/>
        <ImageRadius src={produto4} alt="" height={220}/>
      </GridImages>
    </FooterContainer>
  )
};

export const Footer = memo(component);