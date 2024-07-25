import Image from "next/image";
import React from "react";
import styled from "styled-components"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HelpIcon from '@mui/icons-material/Help';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const Container = styled.div`

  display: flex;
  flex-direction: column;
  background-color: #292A2B;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  max-width: 700px;

  &:hover {

    box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,  
              100%, 0.075),
              /* shadow ring 👇 */
              0 0 0 1px hsla(0, 0%, 0%, 0.05),
              /* multiple soft shadows 👇 */
              0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
              0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
              0 3.5px 6px hsla(0, 0%, 0%, 0.09);
    
  }

`

const ImageCon = styled(Image)`
  
  border-radius: 10px;
  width: 100%;
  height: 100%;

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

      <ImageCon src={src} alt="" width="700" height="500" priority={true}/>

      <ItemContainer>

        <div><EmojiObjectsIcon/> <span>{text.title}</span></div>

        <div><HelpIcon/><span>{text.why}</span></div>

        <div><BuildCircleIcon/><span>{text.how}</span></div>
        
      </ItemContainer>

    </Container>
  )
}