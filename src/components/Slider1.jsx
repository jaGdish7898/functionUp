import React from 'react';


import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    position: relative;
   border: 3px solid blue;

`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius:50%;
    display: flex;
    align-items: center;  
    justify-content: center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${(props)=>props.direction==="left" && "10px"};
    right: ${(props)=>props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer ;
 
`
const Wrapper=styled.div`
    height: 100%;
    border: 2px solid red;
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    border: 2px solid blue;

`
const ImgContainer=styled.div`
    border: 2px solid green;
    height:100%;
    flex:1;
    


`
const InfoContainer=styled.div`
     flex:1;
     padding:50px;
    border: 2px solid violet;

`
const Title=styled.h1``
const Desc=styled.p``
const Button=styled.button``
const Image=styled.img`
    height:80%;
`


const Slider1 = () => {
  return <Container>
             <Arrow direction='left'>
                <ArrowLeftIcon/>
            </Arrow>

            <Wrapper>

           <Slide>
           <ImgContainer>
                <Image src="./images/img2.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Supreme Sale</Title>
                <Desc> get Flat 30% off !! Hurry Up</Desc>
                <Button> SHOP NOW</Button>
            </InfoContainer>
           </Slide>
            
            </Wrapper>

            <Arrow direction='right'>
                <ArrowRightIcon/>
            </Arrow>

        </Container>;
};

export default Slider1;
