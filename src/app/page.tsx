'use client';
import React from 'react'
import styled from "styled-components";
import { Bio } from '../components/Bio'
import {Menu} from '../components/Menu'

const Container = styled.div`

  display: flex;
  justify-content: center;
  padding-top: 10vh;
  height: 100vh;
  gap: 10vh;

`

const MenuContainer = styled.div`

  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: end;

`

const Content = styled.div`

  display: flex;
  width: 70%;

`

export default function Home() {
  return (
    <Container>

      <MenuContainer>
        <Menu/>

      </MenuContainer>

      <Content>

        <Bio/>

      </Content>
    
    </Container>
  );
}
