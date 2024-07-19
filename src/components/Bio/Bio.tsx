import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'
import { Avatar } from '../Avatar/Avatar'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  color: #D3D3D3;

  background-color: #292A2B;
  padding: 10px;
  max-width: 45rem;
  max-height: fit-content;
  border-radius: 10px;



`

const Name = styled.div`

  font-size: 46px;
  font-family: ${bebas.style.fontFamily};
  line-height: 1.5;
  color: white;

`

const Description = styled.div`

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  //max-width: 65%;
  line-height: 1.6;

`

const BrowserControls = styled.div`

  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 15%;

`

const ControlDot = styled(Link)<{color: string}>`

  display: flex;
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 10px;
  

`

const PaddingContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 10px;

`

const BrowserHeader = styled.div`

  display: flex;

`

const SearchBarContainer = styled.div`

  width: 80%;
  display: flex;
  padding-right: 50px;

`

const SearchBar = styled.div`

  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 5px;
  text-align: center;
  line-height: 1.7;
  font-size: 12px;
  max-width: 300px;
  width: 100%;
  max-height: 20px;
  height: 100%;
  color: #f0eeee;

  position: relative;
  left: 17%;
  
`

const IconsContainer = styled.div`

  display: flex;
  margin-top: 30px;
  gap: 10px;
  font-size: 12px;

  a {
    display: flex;
    gap: 5px;
    span {
      line-height: 2.1;
    }
  }
  
`


export const Bio = ({...props}) => {

  return (

    <Container {...props}>

      <BrowserHeader>

        <BrowserControls>
          <ControlDot href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" color={'#FC4646'}/>
          <ControlDot href="" color={'#FCAF24'}/>
          <ControlDot href="" color={'#28C131'}/>
        </BrowserControls>

        <SearchBarContainer>
          <SearchBar>austinbailie.me</SearchBar>
        </SearchBarContainer>

      </BrowserHeader>

      <PaddingContainer>

        <Name>Austin Bailie</Name>

        <Description>
          Hey, I'm Austin. I'm a Software Developer obsessed with building pixel-perfect experiences.

          <Avatar/>
          I'm a tinkerer at heart and always have my hands busy. From cars to coding, I am passionate about solving the problems
          these fields throw at me. I graduated from the University of Guelph (Co-op) in 2021 with a Bachelor of Computing where
          I accepted five internships during my studies.
        
        </Description>

        <IconsContainer>

          <Link href="https://github.com/austinbailie" target='_blank'>
            <GitHubIcon/> 
            <span> Checkout my Github</span>
          </Link>
          <Link href="https://www.linkedin.com/in/austin-bailie/" target='_blank'>
            <LinkedInIcon/> 
            <span> Connect with me on LinkedIn</span>
          </Link>

        </IconsContainer>

      </PaddingContainer>

    </Container>
  )
}

