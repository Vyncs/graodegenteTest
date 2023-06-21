import { styled } from "@stitches/react";
import Image from "next/image";

export const FooterContainer = styled('footer',{
  width: '100%',
  background: "$blue"
})

export const GridImages = styled('div',{
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'center',
  width: '30%',
  margin: '0 auto',
  gap: '1rem',
})

export const ImageRadius = styled(Image ,{
  borderRadius: '1rem',
})