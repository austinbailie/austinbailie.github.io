import { Bebas_Neue } from 'next/font/google'
import React, { useState } from 'react'
import styled from 'styled-components'
import {Card} from './Card'
import { Modal, Box, Typography, ImageList, ImageListItem } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  bgcolor: '#161617',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })

const Container = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 35px;

  @media (max-width: 750px) {
    display: none;
  }

`


const Title = styled.div`

  font-size: 46px;
  font-family: ${bebas.style.fontFamily};
  line-height: 1.5;
  color: white;

  @media (max-width: 750px) {
    text-align: center;
  }

`

const ListContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 20px;
  width: fit-content;
  padding-bottom: 60px;
`

const Header = styled(Typography)`

  font-family: ${bebas.style.fontFamily};
  padding-bottom: 10px;

`

export const Projects = ({...props}) => {

  const [openCar, setOpenCar] = useState(false)
  const [openBox, setOpenBox] = useState(false)
  const [openArrow, setOpenArrow] = useState(false)

  const carText = {title: '1994 Mazda Miata', why: 'Labour of love', how: 'Breaking and learning, blood and sweat, and lots of Youtube'}
  const doorOpener = {title: 'Garage Door Controller', why: 'Peace of mind', how: 'A Swift app, Google Firebase, and a Raspberry Pi'}
  const arrowSite = {title: 'Arrow - A tool for developers', why: 'Solving a need for myself', how: 'Google Firebase, Stripe API, and Next.JS'}

  const carPhotos = ['/car/suspension.jpg', '/car/clutch.jpg', '/car/jackstand.jpg', '/car/cooling.jpg', '/car/brakes.jpg', '/car/coilCompare.jpg']
  const doorController = [ '/doorOpener/box.jpg', '/doorOpener/completeView.jpg', '/doorOpener/app.jpg','/doorOpener/switch.jpg', '/doorOpener/insideBox.jpg']

  return (
    <Container {...props}>

      <Title>Projects</Title>

      <ListContainer>

        <Card src='/car/miataFront.jpg' text={carText} onClick={() => setOpenCar(true)}/>

        <Card src='/doorOpener/insideBox.jpg' text={doorOpener} onClick={() => setOpenBox(true)}/>

        <Card src='/car/miataFront.jpg' text={arrowSite} onClick={() => setOpenArrow(true)}/>
      
      
      </ListContainer>

      <Modal
        open={openCar}
        onClose={() => setOpenCar(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header id="modal-modal-title" variant="h5" >
            Project: 1994 Mazda Miata
          </Header>
          <ImageList variant="masonry" cols={3} gap={8}>
            {carPhotos.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={''}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            This car is a labour of love in so many ways.  
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openBox}
        onClose={() => setOpenBox(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header id="modal-modal-title" variant="h5" >
            Project: Garage Door Controller
          </Header>
          <ImageList variant="masonry" cols={3} gap={8}>
            {doorController.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={''}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            A short paragraph about this beauty.
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openArrow}
        onClose={() => setOpenArrow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header id="modal-modal-title" variant="h5" >
            Project: Arrow
          </Header>
          <ImageList variant="masonry" cols={3} gap={8}>
            {carPhotos.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={''}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            A short paragraph about this beauty.
          </Typography>
        </Box>
      </Modal>


    </Container>
  )
}