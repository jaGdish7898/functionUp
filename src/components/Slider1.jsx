import React from 'react';


import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    position: relative;
   /* border: 3px solid blue; */

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
  background:red;
    right: ${(props)=>props.direction==="left" && "70px"};
    right: ${(props)=>props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
   
    

    
   
  
 
`
const Wrapper=styled.div`
    height: 100%;
    /* border: 2px solid red; */
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    /* border: 2px solid blue; */

`
const ImgContainer=styled.div`
    
    height:100%;
    flex:1;
    margin-top: 20px;
    position: relative;
    
    


`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    
    /* border: 2px solid violet; */

`
const Title=styled.h1`
    font-weight: bolder;
    font-size: 70px;
    `

const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing: 3px;
`
const Button=styled.button`
    padding:10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Image=styled.img`
    height:80%;
    width: 100%;
    /* padding-top: 30px; */
    position: absolute;
    top:0px;
    bottom:0px;
    margin: auto;
`


const Slider1 = () => {
  return <Container>
             <Arrow direction='left'>
                <ArrowLeftIcon style={{fontSize:80}}/>
            </Arrow>
            <Wrapper>

           <Slide>
           <ImgContainer>
                <Image src="./images/img3.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Supreme Sale</Title>
                <Desc> get Flat 30% off !! Hurry Up</Desc>
                <Button> SHOP NOW</Button>
            </InfoContainer>
           </Slide>
            
            </Wrapper>

            <Arrow direction='right'>
                <ArrowRightIcon style={{fontSize:80}}/>
            </Arrow>

        </Container>;
};

export default Slider1;
