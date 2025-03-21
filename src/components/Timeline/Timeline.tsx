import React from 'react'
import styled from 'styled-components'
import { Bebas_Neue } from 'next/font/google'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] })


const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  padding-top: 35px;

  @media (max-width: 750px) {
    padding: 0;
    width: 100%;
    justify-content: center;
    

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

const TimelineContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 35vw;
  //height: 1500px;
  color: white;

  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
    padding: 0;
    padding-top: 10px;

  }
  
`

export const CareerTimeline = ({...props}) => {

  return (
    <Container {...props}>

      <Title>Career Timeline</Title>

      <TimelineContainer>

        <Timeline position="right">
          <TimelineItem>
            <TimelineOppositeContent >
              Summer 2018
            </TimelineOppositeContent>  
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>RevyooMe</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent >
              Fall 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sandbox Software Solutions</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent >
              Summer 2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Manulife Financial</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent >
              Winter / Summer 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Nokia</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent >
              Currently
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="error" />
            </TimelineSeparator>
            <TimelineContent>Hootsuite</TimelineContent>
          </TimelineItem>
        </Timeline>

      </TimelineContainer>
    
    </Container>
  )
}