import Image from "next/image";
import React from "react";
import styled from "styled-components"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HelpIcon from '@mui/icons-material/Help';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const Container = styled.div`

  display: flex;
  flex-direction: column;
  background-color: #1F1F20;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

`

const ImageCon = styled(Image)`
  
  border-radius: 10px;

`

const ItemContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  color: #CECCCD;
  padding-top: 10px;

  div {
    display: flex;
    gap: 5px;
    span {
      line-height: 1.7;

      @media (max-width: 750px) {
        line-height: 1.1;
      }
    }
  }

`

type TextObj = {
  title: string,
  why: string,
  how: string,
}

export const Card = ({src, text, onClick} : {src: string, text: TextObj, onClick?: () => void}) => {

  return (
    <Container onClick={() => onClick!()}>

      <ImageCon src={src} alt="" width="700" height="500"/>

      <ItemContainer>

        <div><EmojiObjectsIcon/> <span>{text.title}</span></div>

        <div><HelpIcon/><span>{text.why}</span></div>

        <div><BuildCircleIcon/><span>{text.how}</span></div>
        
      </ItemContainer>

    </Container>
  )
}