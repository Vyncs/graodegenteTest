import { styled } from "..";
import { Handbag, Heart} from "phosphor-react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100$",
  padding: "1rem 3rem",
  backgroundColor: "$blue",
  height: '134px',
});

export const ImageText = styled("h1", {
  fontFamily: "Sacramento, cursive;",
  color: "$white",
  fontSize: "4rem",
  letterSpacing: "1px",
});

export const FlexIcons = styled("div", {
  display: "flex",
  gap: "1rem",
  height: "auto",
  alignItems: "center",
  });

export const CustomHeart = styled(Heart, {
  size: 40,
  color: '$white',

  "&:hover": {
      transition: "all 0.2s ease-in-out",
      opacity: 0.5,
      cursor: "pointer",
    },
  },
);

export const CustomHandbag = styled(Handbag, {
  size: 40,
  color: '$white',

  "&:hover": {
      transition: "all 0.2s ease-in-out",
      opacity: 0.5,
      cursor: "pointer",
    },
  },
);

export const UserFlex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  span: {
    fontWeight: "bold",
    color: "$white",
    fontSize: "$sm",
    fontFamily: 'sans-serif',
  },

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    opacity: 0.5,
    cursor: "pointer",
  },
});
