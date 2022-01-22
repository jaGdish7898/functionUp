import React from 'react';
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Search from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Image=styled.img`
    height:75%;
    width:90%;
 border-radius: 50%;
    
`
const Info=styled.div`
    opacity:0;
    left: 300px;
    /* top:80px */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background:rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition :all 0.5s ease;
    cursor: pointer;
    




`
const Container=styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height:350px;
    display: flex;
    
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
    
`


const Icon=styled.div`
margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
&:hover{
        background-color: #e9f5f5;
        transform:scale(1.1)
    }

`
// const Circle=styled.div`
//     height: 300px;
//     width: 270px;
//     border-radius: 50%;
//     background-color: gray;
//     position: absolute;
   

// `


const Product = ({item}) => {
  return <Container>
            {/* <Circle/> */}
           
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
            </Info>
        </Container>;
};

export default Product;
