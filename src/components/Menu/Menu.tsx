import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })

const Container = styled.div`
  
  display: flex;

`

const Icon = styled.div`

  font-size: 50px;
  font-family: ${bebas.style.fontFamily};
  background-color: white;
  border-radius: 10px;
  color: black;
  height: 55px;
  width: 55px;
  text-align: center;

`

export const Menu = () => {

  return (

    <Container>

      <Icon>AB</Icon>


    </Container>
  )
}

