import React from 'react';
import { useState } from 'react';
import { sliderItems } from '../data';


import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    position: relative;
   /* border: 3px solid blue; */
   overflow:hidden;

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
    z-index:2;
  
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
    display:flex;
    /* border: 2px solid red; */
    transform: translate(${props=>props.slideIndex*-100}vw);
    transition:all 1.5s ease;
`
const Slide=styled.div`
    background-color: ${props=>props.bg};
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
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
        if (direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
            
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }
  return <Container>
             <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftIcon style={{fontSize:80}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(

           <Slide bg={item.bg} key ={item.id}> 
           <ImgContainer>
                <Image src={item.image}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button> SHOP NOW</Button>
            </InfoContainer>
           </Slide>
           ))}
            
           
            </Wrapper>

            <Arrow direction='right' onClick={()=>handleClick("right")}>
                <ArrowRightIcon style={{fontSize:80}}/>
            </Arrow>

        </Container>;
};

export default Slider1;
