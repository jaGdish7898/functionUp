
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:orange;
    position: relative;
   

`
const Wrapper=styled.div`
    height: 100%;
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
    margin: auto;
    left: ${(props)=>props.direction==="left" && "10px"};
    right: ${(props)=>props.direction==="right" && "10px"};
    cursor: pointer ;
    opacity: 0;

`
const Slide=styled.div`
    display: flex;
    height: 100vh;
    width: 100vh;
    align-items: center;

`
const ImgContainer=styled.div`
    flex:1;
    height:100%


`
const InfoContainer=styled.div`
     flex:1;
`
const Image=styled.image`
    height:80%

`


const Slider = () => {
  return <Container>
            <Arrow direction='left'>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper>
            <Slide>
            <ImgContainer>
                <Image src='https://i.iib.co/XsdmR2c/1.png'/>
            </ImgContainer>
            </Slide>
            
            <InfoContainer></InfoContainer>

            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightIcon/>
            </Arrow>

        </Container>;
};

export default Slider;
