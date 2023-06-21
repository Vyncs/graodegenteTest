import { styled } from "@stitches/react";
import Image from "next/image";
import Link from "next/link";

export const FooterContainer = styled("main", {
  width: "100%",
  background: "$blue",

  h1: {
    display: "flex",
    justifyContent: "center",
    color: "$white",
    fontFamily: "serif",
    padding: "2.5rem 0 1.5rem 0",
    fontSize: "$xl",
    fontWeight: "bold",
  },
});

export const Container = styled("footer", {
  width: "80%",
  margin: "0 auto",
});

export const GridFooterLinks = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
  gap: "3rem",

  h3: {
    color: "$white",
    fontFamily: "sans-serif",
    fontSize: "$md",
    paddingBottom: "1.5rem",
  },

  div: {
    padding: "5px",
  },
});

export const ImageRadius = styled(Image, {
  borderRadius: "1rem",
  marginBottom: "3rem",
});

export const LinkFlex = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Links = styled(Link, {
  textDecoration: "none",
  color: "$white",
  fontFamily: "sans-serif",

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    opacity: 0.8,
    cursor: "pointer",
  },
});

export const GridFooterInfos = styled("div", {
  borderTop: "1px solid #68C9BE",
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  width: "100%",
  margin: "1rem auto",
  padding: "2rem 0",

  div: {
    display: "flex",
    alignItems: "center",
  },
});

export const LocationInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontFamily: "serif",
  color: "$white",
  justifyContent: "center",

  p: {
    display: "flex",
    justifyContent: "initial",
    fontSize: "14px",
  },
});

export const GridIconInfos = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  h3: {
    fontSize: "$xl",
    color: "$white",
    fontFamily: "ui-sans-serif",
    display: "flex",
    alignItems: "center",
    fontWeight: 'normal'
  },
});

export const GridIcons = styled("div", {
  display: "flex",
  flexDirection: "column",
});
