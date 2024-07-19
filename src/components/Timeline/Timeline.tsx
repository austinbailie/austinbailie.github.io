import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'
import { Avatar } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import RevyooMe from './logos/revyoomelogo.png'

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })


const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  

`

const Title = styled.div`

  font-size: 46px;
  font-family: ${bebas.style.fontFamily};
  line-height: 1.5;
  color: white;

`

const TimelineContainer = styled.div`

  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 1500px;
  gap: 10px;
  
  svg {
    margin-top: 25px;
  }

`

export const Timeline = ({...props}) => {

  return (
    <Container {...props}>

      <Title>Career Timeline</Title>

      <TimelineContainer>

        <div>Internships</div>
        <Avatar sx={{ width: 75, height: 75}} src={'/logos/revyoomelogo.png'}/>
        <DoubleArrowIcon/>
        <Avatar sx={{ width: 75, height: 75}} src={'/logos/sandboxlogo.png'}/>
        <DoubleArrowIcon/>
        <Avatar sx={{ width: 75, height: 75}} src={'/logos/manulifelogo.png'}/>
        <DoubleArrowIcon/>
        <Avatar sx={{ width: 75, height: 75}} src={'/logos/nokialogo.jpg'}/>

      </TimelineContainer>
    
    </Container>
  )
}