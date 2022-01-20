import React from 'react';
import styled from 'styled-components'
import Search from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Container=styled.div`
  
    height:60px;
    border: 1px solid yellow;
`
const Wrapper=styled.div`
    padding: 10px 20px;
    border: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`
const Right=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Center=styled.div`
    flex: 1;
  
    text-align: center;
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchCont=styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
`
const Input=styled.input`
    border:none;
   
`
const Logo=styled.h1`
    font-weight:bold;
   
   
`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
`



const Navbar = () => {
  return <div>
      <Container>
          <Wrapper>
            <Left>
                <Language>Eng</Language>
                <SearchCont>
                    <Input/>
                    <Search/>
                </SearchCont>
            </Left>
            <Center>
                <Logo>hii</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>

                    </Badge>
                </MenuItem>
            </Right>

          </Wrapper>
      </Container>
    
  </div>;
};

export default Navbar;
