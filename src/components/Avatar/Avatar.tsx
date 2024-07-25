import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import profile from './avatarPic.jpg'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TerminalIcon from '@mui/icons-material/Terminal';
import LandscapeIcon from '@mui/icons-material/Landscape';

const Container = styled.div`

  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;

  @media (max-width: 750px) {
    padding-left: 10px;
  }

`

const ImageCon = styled(Image)`
  
  border-radius: 100px;
  width: 150px;
  height: 150px;

  @media (max-width: 750px) {
    width: 100px;
    height: 100px;
  }

`

const Traits = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 40px;

  @media (max-width: 750px) {
    padding-left: 20px;
  }

  div {

    display: flex;
    gap: 10px;
    color: #c6c6c6;

    span {
      line-height: 1.7;
      color: #c6c6c6;
    }
  }

`

export const Avatar = () => {

  return (

    <Container>

      <ImageCon src={profile} alt={''} priority={true}/>

      <Traits>
        <div>
          <TerminalIcon/> <span>Tech obsessed</span>
        </div>
        <div>
          <DirectionsCarIcon/> <span>Car enthusiast</span>
        </div>
        <div>
          <LandscapeIcon/> <span>Outdoorsy</span>
        </div>
      </Traits>

    </Container>
  )
}