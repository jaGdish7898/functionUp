import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const Container=styled.div`

`
const Wrapper=styled.div`
padding: 50px;
display: flex;
`
const ImgContainer=styled.div`
flex:1;
padding: 0px 50px;

`
const Image=styled.img`
width:100%;
height: 90vh;
object-fit:cover;
`
const InfoContainer=styled.div`
flex:1;
`
const Title=styled.h1`
font-weight: 200;

`
const Desc=styled.p`
margin:20px 0px;

`
const Price=styled.span`
font-weight: 400;
font-style: 40px;

`
const FilterContainer=styled.div`
width:50%;
margin: 30px 0;
    display: flex;
    justify-content: space-between;

`

const Filter=styled.div`
    display: flex;
    align-content: center;
`
const FilterTitle=styled.span`
    font-style: 20px;
    font-weight: 200;
    margin-left: 20px;
    
`
const FilterColor=styled.div`   
    width: 20px;height: 20px;
    background-repeat: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    border-radius: 50%;

    `
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width:50% */
`

const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount=styled.span`
    height: 30px;
    width: 30px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button=styled.button`
    padding:5px;
    border:2px solid teal;
    background: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background: #e8faf7;
    }
`

const Product = () => {
  return <Container>
  <Navbar/>
  <Announcement/>
  <Wrapper>
      <ImgContainer>
          <Image src="images/iphone-12-pro-max-smartphone-5EX2mr2-600.jpg"/>
      </ImgContainer>
      <InfoContainer>
          <Title>I phone </Title>
          <Desc>iPhone 12 Pro Max mobile was launched on 13th October 2020. The phone comes with a 6.70-inch touchscreen display with a resolution of 1284x2778 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 12 Pro Max is powered by a hexa-core Apple A14 Bionic processor. </Desc>
          <Price>₹ 150000</Price>
          <FilterContainer>
              <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="darkblue"/>
                  <FilterColor color="gray"/>
                  
              </Filter>
              <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                  
                  
                  
              </Filter>
          </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveCircleIcon style={{marginRight:20}}/>
                        <Amount style={{fontSize:20}}>1</Amount>
                        <AddCircleIcon  style={{marginLeft:20}}/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>

            </AddContainer>
      </InfoContainer>
  </Wrapper>
  <Newsletter/>
  <Footer/>

        </Container>;
};

export default Product;
//https://www.pixelsquid.com/png/iphone-12-pro-max-2497310454813037779?image=G03