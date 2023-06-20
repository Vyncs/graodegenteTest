import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import logoImg from "../assets/logo.png";
import Image from "next/image";
import {
  Container,
  CustomHandbag,
  CustomHeart,
  FlexIcons,
  HeaderContainer,
  ImageText,
  UserFlex,
} from "@/styles/pages/header";
import { MagnifyingGlass, User } from "phosphor-react";
import { CustomInput } from "@/components/CustomInput";
import { DiscountMessage } from "@/components/DiscountMessage";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <DiscountMessage/>
        <HeaderContainer>
          {/* <Image src={logoImg} alt="" /> */}
          <ImageText>grão de gente</ImageText>
          <CustomInput type="text" placeholder="Pesquisar" withIcon/>
          <FlexIcons>
            <UserFlex>
              <User size={36} color="#fff" />
              <span>Entre ou Cadastre-se</span>
            </UserFlex>
            <span>
              <CustomHeart size={36} color="#fff" />
            </span>
            <span>
              <CustomHandbag size={36} color="#fff" />
            </span>
          </FlexIcons>
        </HeaderContainer>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
