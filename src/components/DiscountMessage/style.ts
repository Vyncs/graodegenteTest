import { styled } from "@stitches/react";


export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: '$white'
})

export const H1 = styled('h1', {
  fontSize: '12px',
  letterSpacing: '0.8px',
  height: '2.8rem',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  span: {
    color: '$blue',
    margin: '0 5px'
  }
})