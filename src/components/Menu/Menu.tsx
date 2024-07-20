import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })

const Container = styled.div`
  
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 15px;

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

const MenuItem = styled(Link)`

  padding: 5px;
  text-align: center;
  border-radius: 5px;
  font-family: ${bebas.style.fontFamily};
  font-size: 18px;

  &:hover {
    background-color: #454545;
    
  }

`

export const Menu = () => {

  return (

    <Container>

      <Icon>AB</Icon>

      <MenuItem href={'#home'} scroll={true}>home</MenuItem>
      <MenuItem href={'#work'} scroll={true}>career</MenuItem>
      <MenuItem href={'#projects'} scroll={true}>projects</MenuItem>


    </Container>
  )
}

