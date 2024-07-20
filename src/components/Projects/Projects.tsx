import { Bebas_Neue } from 'next/font/google'
import React, { useState } from 'react'
import styled from 'styled-components'
import {Card} from './Card'
import { Modal, Box, Typography } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
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

export const Projects = ({...props}) => {

  const [openCar, setOpenCar] = useState(false)

  const carText = {title: '1994 Mazda Miata', why: 'Labour of love', how: 'Breaking and learning, blood and sweat, and lots of Youtube'}
  const doorOpener = {title: 'Garage Door Controller', why: 'Peace of mind', how: 'A Swift app, Google Firebase, and a Raspberry Pi'}
  const arrowSite = {title: 'Arrow - A tool for developers', why: 'Solving a need for myself', how: 'Google Firebase, Stripe API, and Next.JS'}

  return (
    <Container {...props}>

      <Title>Projects</Title>

      <ListContainer>

        <Card src='/car/miataFront.jpg' text={carText} onClick={() => setOpenCar(true)}/>

        <Card src='/doorOpener/insideBox.jpg' text={doorOpener}/>

        <Card src='/car/miataFront.jpg' text={arrowSite}/>
      
      
      </ListContainer>

      <Modal
        open={openCar}
        onClose={() => setOpenCar(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>


    </Container>
  )
}