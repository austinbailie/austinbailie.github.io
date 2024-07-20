'use client';
import React from 'react'
import styled from "styled-components";
import { Bio } from '../components/Bio'
import {Menu} from '../components/Menu'
import { CareerTimeline } from '@/components/Timeline';
import { Projects } from '@/components/Projects'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`

  display: flex;
  justify-content: center;
  padding: 10vh;
  padding-bottom: 0;
  height: 100vh;
  gap: 10vh;
  background-color: #0E0E0E;

  @media (max-width: 750px) {
    padding: 3vh;
    padding-bottom: 0;
  }

`

const MenuContainer = styled.div`

  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: end;

  @media (max-width: 768px) {
    display: none;
  }

`

const Content = styled.div`

  display: flex;
  width: 70%;
  flex-direction: column;
  gap: 50vh;
  overflow-y: scroll;

  @media (max-width: 768px) {
    width: 100%;
    gap: 25vh;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;

`

export default function Home() {
  return (
    <Container className={inter.className}>

      <MenuContainer>
        <Menu/>

      </MenuContainer>

      <Content style={{scrollBehavior:'smooth'}}>

        <Bio id={"home"}/>
        <CareerTimeline id={"work"}/>
        <Projects id={"projects"}/>

      </Content>
    
    </Container>
  );
}
