import { styled } from "@stitches/react";
import Image from "next/image";

export const CategoryContainer = styled('div', {
  width: '100%',
  borderBottom: '3px solid #E6E6E6',
  paddingBottom: '2rem'
})

export const CustomImage = styled(Image,{
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const TitleCategory = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  fontFamily: 'sans-serif',

  h1: {
    fontWeight: 'normal'
  },

  strong: {
    color:'#323232'
  }
})

export const Product = styled('a', {
  borderRadius: '2rem',
  // padding: '0.25rem',
  height: '18rem',
  "&:hover": {
    transition: "all 0.2s ease-in-out",
    opacity: 0.95,
    cursor: "pointer",
  },

  footer: {
    borderRadius: '3rem',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    background: '$white',
    position: 'absolute',
    bottom: '1rem',
    left: '0.25rem',
    rigth: '0.25rem',
    width: '91%',
    margin: '10px',
    height: '3.5rem',
    fontFamily: 'sans-serif',
    letterSpacing: '0.8px',
    
    span: {
      fontSize: '$xg',
      color: '#B1B1B3',
    },

  },
})