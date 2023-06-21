import { memo } from "react";
import { CustomInput } from "../CustomInput";
import { User } from "phosphor-react";
import ExampleNavigationMenu from "../NavigationMenu";
import {
  BackgroundHeader,
  FlexIcons,
  HeaderContainer,
  ImageText,
  UserFlex,
  CustomHeart,
  CustomHandbag,
} from "./style";
import { Links } from "../Footer/style";
import { DiscountMessage } from "../DiscountMessage";

const component = () => {
  return (
    <>
      <DiscountMessage />
      <BackgroundHeader>
        <HeaderContainer>
          {/* <Image src={logoImg} alt="" /> */}
          <Links href="/">
            <ImageText>grão de gente</ImageText>
          </Links>
          <CustomInput type="text" placeholder="Pesquisar" withIcon />
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
        <ExampleNavigationMenu></ExampleNavigationMenu>
      </BackgroundHeader>
    </>
  );
};

export const Header = memo(component);
