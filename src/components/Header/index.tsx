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

const component = () => {
  return (
      <BackgroundHeader>
        <HeaderContainer>
          {/* <Image src={logoImg} alt="" /> */}
          <ImageText>grão de gente</ImageText>
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
  );
};

export const Header = memo(component);
