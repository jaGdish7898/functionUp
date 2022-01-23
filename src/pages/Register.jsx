import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
 
height: 100vh;
width:100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #fccae0;
`
const Wrapper=styled.div`
padding: 20px;
width:40%;
background: white;
`
const Form=styled.form`
    display: flex;
    position: relative;
    flex-wrap: wrap;
   

`
const Title=styled.h1`
font-size:24px;
font-weight: 300;
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;

`
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 10px;;
`
const Button=styled.button`
    width: 20%;
    display:block;
    height:40px;
    background: teal;
    margin-top:10px;
    margin-left: 130px;
   
`


const Register = () => {
  return <Container>
            
            <Wrapper>

                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Input placeholder="Confirm password"/>
                    
                    <Agreement> i am ready to followa all rule regarding this application</Agreement>
                    <Button>CREATE</Button>



                </Form>

            </Wrapper>

        </Container>;
};

export default Register;
