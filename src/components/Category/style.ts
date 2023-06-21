import Tab from '@mui/material/Tab';
import { styled } from '@stitches/react';

export const Text = styled('h1', {
  display: 'flex',
  justifyContent: 'center',
  fontWeight:'normal',
  color: '#323232',
  fontFamily: 'sans-serif',
  margin: '2rem 0',

  span:{
    fontWeight: 'bold',
    padding: '0 10px',
    color: '#323232',
    fontFamily: 'sans-serif',
  }
})
export const CustomTab = styled(Tab,{
 borderRadius: '20px',
 border: '1px solid grey', 
 margin: '1rem 2rem',
 width: '12rem',
 fontSize: '12px',
 fontWeight: 'bold',
 textTransform: 'capitalize',

 '&:hover': {
  background: '#DFF9F7',
  color: "$blue"
 }
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
