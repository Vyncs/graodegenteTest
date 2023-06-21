import { memo } from "react";
import {
  Container,
  FooterContainer,
  GridFooterInfos,
  GridFooterLinks,
  GridIconInfos,
  GridIcons,
  ImageRadius,
  LinkFlex,
  Links,
  LocationInfos,
} from "./style";
import Image from "next/image";
import produto1 from "../../assets/footer/footer1.png";
import produto2 from "../../assets/footer/footer2.png";
import produto3 from "../../assets/footer/footer3.png";
import produto4 from "../../assets/footer/footer4.png";
import logoFooter from "../../assets/footer/logoFooter.png";
import IconsFooter from "../../assets/footer/IconsFooter.png";

const component = () => {
  return (
    <FooterContainer>
      <Container>
        <h1>@grãodegente</h1>
        <GridFooterLinks>
          <div>
            <ImageRadius src={produto1} alt="" height={220} />
            <h3>Institucional</h3>
            <LinkFlex>
              <Links href="a-empresa">A Empresa</Links>
              <Links href="nosso-processo-de-producao">
                Processo de Produção
              </Links>
              <Links href="nosso-processo-de-producao#controle-de-qualidadeo">
                Controle de Qualidade
              </Links>
              <Links href="nosso-algodao">Nosso Algodão</Links>
              <Links href="CentraldeAtendimento">Política de Privacidade</Links>
              <Links href="CentraldeAtendimento/SupplierContact">
                Seja Nosso Fornecedor
              </Links>
            </LinkFlex>
          </div>
          <div>
            <ImageRadius src={produto2} alt="" height={220} />
            <h3>Atendimento ao Cliente</h3>
            <LinkFlex>
              <Links href="a-empresa">A Empresa</Links>
              <Links href="nosso-processo-de-producao">
                Processo de Produção
              </Links>
              <Links href="nosso-processo-de-producao#controle-de-qualidadeo">
                Controle de Qualidade
              </Links>
              <Links href="nosso-algodao">Nosso Algodão</Links>
              <Links href="CentraldeAtendimento">Política de Privacidade</Links>
              <Links href="CentraldeAtendimento/SupplierContact">
                Seja Nosso Fornecedor
              </Links>
            </LinkFlex>
          </div>
          <div>
            <ImageRadius src={produto3} alt="" height={220} />
            <h3>Ajuda</h3>
            <LinkFlex>
              <Links href="a-empresa">A Empresa</Links>
              <Links href="nosso-processo-de-producao">
                Processo de Produção
              </Links>
              <Links href="nosso-processo-de-producao#controle-de-qualidadeo">
                Controle de Qualidade
              </Links>
              <Links href="nosso-algodao">Nosso Algodão</Links>
              <Links href="CentraldeAtendimento">Política de Privacidade</Links>
              <Links href="CentraldeAtendimento/SupplierContact">
                Seja Nosso Fornecedor
              </Links>
            </LinkFlex>
          </div>
          <div>
            <ImageRadius src={produto4} alt="" height={220} />
            <h3>Certificado</h3>
            <LinkFlex>
              <Links href="a-empresa">A Empresa</Links>
              <Links href="nosso-processo-de-producao">
                Processo de Produção
              </Links>
              <Links href="nosso-processo-de-producao#controle-de-qualidadeo">
                Controle de Qualidade
              </Links>
              <Links href="nosso-algodao">Nosso Algodão</Links>
              <Links href="CentraldeAtendimento">Política de Privacidade</Links>
              <Links href="CentraldeAtendimento/SupplierContact">
                Seja Nosso Fornecedor
              </Links>
            </LinkFlex>
          </div>
        </GridFooterLinks>
        <GridFooterInfos>
          <div>
            <Image src={logoFooter} alt="logo rodapé" />
            <LocationInfos>
              <p>
                Grão de Gente - LGF Comércio Eletrônico LTDA -
                CNPJ:26.384.531/0001-19
              </p>
              <p>
                Rod mg 290, Km 73, s/n - Vargem da Forquilha - Jacutinga/MG -
                CEP:37.590-000
              </p>
            </LocationInfos>
          </div>
          <GridIconInfos>
            <div>
              <h3>Siga a Grão:</h3>
            </div>
            <GridIcons>
              <div>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
              </div>
              <div>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
                <Links href="https://www.instagram.com/">
                  <Image src={IconsFooter} alt="" />
                </Links>
              </div>
            </GridIcons>
          </GridIconInfos>
        </GridFooterInfos>
      </Container>
    </FooterContainer>
  );
};
export const Footer = memo(component);
