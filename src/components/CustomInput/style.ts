import { styled } from "@stitches/react";
import { MagnifyingGlass } from "phosphor-react";

export const Container = styled("div", {
  width: "30%",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "$white",
  borderRadius: ".5rem",
  padding: "0 1rem",
});

export const Input = styled("input", {
  border: "none",
  height: "100%",
  borderRadius: "20%",
  width: "100%",

  "&:focus": {
    outline: "none",
  },
});

export const Icon = styled(MagnifyingGlass, {
  color: "$blue",

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    opacity: 0.5,
    cursor: "pointer",
  },
});
