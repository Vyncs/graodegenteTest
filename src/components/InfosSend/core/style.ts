import { styled } from "@stitches/react";


export const ContainerColumn = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
export const CircleIcon = styled('div',{
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  width: '8rem',
  height: '8rem',
  alignItems: 'center',
  background: '#EEFEFE',

  '&:hover': {
    boxShadow: '1px 2px 3px 2px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: "all 0.2s ease-in-out",
  }
})

export const BoldText = styled('h1',{
  fontSize: '$md',
  fontWeight: 'bold',
  paddingTop: '1rem',
  letterSpacing: '0.2px',
  color: '#4F4F4F',
  fontFamily: 'sans-serif'
})

export const NormalText = styled('p',{
  fontSize: '12px',
  letterSpacing: '0.8px',
  color: '#4F4F4F',
  padding: '5px',
  fontFamily: 'sans-serif'
})