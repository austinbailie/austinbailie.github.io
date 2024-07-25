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
  maxWidth: '800px',
  width: '100%',
  bgcolor: '#292A2B',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
  outline: 'none',
  borderRadius: '10px'
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
  padding-top: 10px;

`

const ImageListCar = styled(ImageList)`

  max-width: 700px;
  width: 100%;
  margin-left: 15px;
  pointer-events: none;
  
  
`

const ImageListDoor = styled(ImageList)`

  max-width: 700px;
  width: 100%;
  pointer-events: none;

`

const ImageCon = styled.div`
  
  display: flex;
  flex-direction: row;
  gap: 8px;
  
`


export const Projects = ({...props}) => {

  const [openCar, setOpenCar] = useState(false)
  const [openBox, setOpenBox] = useState(false)
  const [openArrow, setOpenArrow] = useState(false)

  const carText = {title: '1994 Mazda Miata', why: 'Labour of love', how: 'Breaking and learning, Canadian Tire, and lots of YouTube'}
  const doorOpener = {title: 'Garage Door Controller', why: 'Peace of mind', how: 'A Swift app, Google Firebase, and a Raspberry Pi'}
  const arrowSite = {title: 'Arrow - A tool for developers', why: 'Solving a need for myself', how: 'Google Firebase, Stripe API, and Next.JS'}

  const carPhotos = ['/car/suspension.jpg', '/car/clutch.jpg', '/car/jackstand.jpg', '/car/cooling.jpg', '/car/brakes.jpg', '/car/coilCompare.jpg']
  const doorController = [ '/doorOpener/box.jpg', '/doorOpener/completeView.jpg', '/doorOpener/switch.jpg', '/doorOpener/insideBox.jpg']

  return (
    <Container {...props}>

      <Title>Projects</Title>

      <ListContainer>

        <Card src='/arrow/arrow.png' text={arrowSite} onClick={() => setOpenArrow(true)}/>

        <Card src='/car/miataFront.jpg' text={carText} onClick={() => setOpenCar(true)}/>

        <Card src='/doorOpener/insideBox.jpg' text={doorOpener} onClick={() => setOpenBox(true)}/>

      </ListContainer>

      <Modal
        open={openCar}
        onClose={() => setOpenCar(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <ImageListCar variant="masonry" cols={3} gap={8}>
            {carPhotos.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}`}
                  src={`${item}`}
                  alt={''}
                />
              </ImageListItem>
            ))}
          </ImageListCar>
          <Header id="modal-modal-title" variant="h5" >
            Project: 1994 Mazda Miata
          </Header>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
          This car has been a lesson in determination and troubleshooting problems, 
          while also being a labor of love. Every repair or modification I've done on this car has been tackled with self-taught knowledge. 
          From changing the clutch and replacing the suspension to overhauling the cooling system, each task was a first for me. 
          Despite the challenges, I was eager to take them on. 
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openBox}
        onClose={() => setOpenBox(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <ImageCon>
            <img src='/doorOpener/app.jpg' height='405'/>
            <ImageListDoor  cols={2} gap={8}>
              {doorController.map((item) => (
                <ImageListItem key={item}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt={''}
                  />
                </ImageListItem>
              ))}
            </ImageListDoor>
          </ImageCon>
          <Header id="modal-modal-title" variant="h5" >
            Project: Garage Door Controller
          </Header>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            This was a small and enjoyable experiment involving Raspberry Pi's and communicating with them through a Firebase Real-Time Database. 
            The purpose of this project was to operate my home garage door and remotely monitor its open or closed state. 
            Using the I/O ports on the Raspberry Pi, I controlled the movements of the servo and determined the door's state through a connected 
            limit switch activated by the door. Combined with an iOS app written in Swift, we had a functioning prototype. 
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openArrow}
        onClose={() => setOpenArrow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <img src='/arrow/arrow.gif' style={{width: '100%'}}/>
          <Header id="modal-modal-title" variant="h5" >
            Project: Arrow
          </Header>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
          Arrow is a tool designed to help software developers find solutions faster through documentation and team collaboration. It includes features such as email and Google sign-up, 
          subscription payments through the Stripe API, code syntax highlighting, search functionality, 
          and communication with various APIs. 
          This tool was built from the ground up using Next.js, styled-components, and Google Firebase.
          </Typography>
        </Box>
      </Modal>


    </Container>
  )
}