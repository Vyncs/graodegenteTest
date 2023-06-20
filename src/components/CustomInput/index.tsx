import { MagnifyingGlass } from "phosphor-react";
import { DetailedHTMLProps, InputHTMLAttributes, memo } from "react";
import { Container, Icon, Input } from "./style";

export interface CustomInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  withIcon?: boolean;
  icon?: any;
  placeholder?: string
}

const component = ({ withIcon = false, icon, placeholder, style, ...rest }: CustomInputProps) => {
  return (
    <Container style={style}>
      <Input type="text" placeholder={placeholder}/>
      {withIcon && (icon || <Icon/>)}
    </Container>
  );
};

export const CustomInput = memo(component);
