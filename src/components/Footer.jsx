import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';
const Container=styled.div`
    display: flex;
`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Logo=styled.h1`
    
`
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;

`
const SocialIcon=styled.div`
display: flex;
width: 40px;
height: 40px;
border-radius: 50%;
background-color:#${props=>(props.color)};
align-items: center;
justify-content: center;
margin-right: 20px;

`
const Right=styled.div`
    flex:1;
    padding: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
`
const Title=styled.h3`
margin-bottom: 30px;

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;

flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem=styled.div`
    display: flex;
    margin-bottom: 20px;
    align-content: center;
`
const Payment=styled.img`
    height:50px;
`

const Footer = () => {
  return <Container>

            <Left>
                <Logo>Lama</Logo>
                <Desc> i am description of footer</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon  color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon  color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon  color="E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                   
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man's Fashion</ListItem>
                    <ListItem> Women's Fashion</ListItem>
                    <ListItem>Acessories</ListItem>
                    <ListItem>MyAcccount</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <LocationOnIcon/>ward no 4 Amravtai 444 602 </ContactItem>
                <ContactItem> <LocalPhoneIcon/>+91 7898764455</ContactItem>
                <ContactItem> <MailIcon/>Contact @mysite.com</ContactItem>
                <Payment src="./images/cards.jpg"/>

            </Right>
            

        </Container>;
};

export default Footer;
