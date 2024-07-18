import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'
import { Avatar } from '../Avatar/Avatar'

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  



`

const Name = styled.div`

  font-size: 46px;
  font-family: ${bebas.style.fontFamily};
  line-height: 1.5;

`

const Description = styled.div`

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 65%;
  line-height: 1.6;

`




export const Bio = () => {

  return (

    <Container>

      <Name>Austin Bailie</Name>

      <Description>
        Hey, I'm Austin. I'm a Software Developer obsessed with building pixel-perfect experiences.

        <Avatar/>
        I'm a tinkerer at heart and always have my hands busy. From cars to coding, I am passionate about solving the problems
        these fields throw at me. I graduated from the University of Guelph (Co-op) in 2021 with a Bachelor of Computing where
        I accepted five internships during my studies.
       
      </Description>

    </Container>
  )
}

