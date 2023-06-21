import { styled } from "@stitches/react";
import Image from "next/image";

export const CategoryContainer = styled('div', {
  width: '100%',
  borderBottom: '3px solid #E6E6E6',
  paddingBottom: '2rem'
})

export const Product = styled('div', {
  borderRadius: '2rem',
  background: '#F8DEB9',
  cursor: 'pointer',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    gap:'1rem',

    strong: {
      color: '#BB7E2C',
    }
  }
})

export const CustomImage = styled(Image,{
  width: '100%',
  height: '350px',
  objectFit: 'cover'
})