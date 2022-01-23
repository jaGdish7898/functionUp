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
width:25%;
background: white;
`
const Form=styled.form`

    display: flex;
    position: relative;
    flex-direction: column;
   

`
const Title=styled.h1`
font-size:24px;
font-weight: 300;
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;

`

const Button=styled.button`
    width: 20%;
    display:block;
    height:40px;
    background: teal;
    margin:auto;
   
`
const Link=styled.a`
    margin:5px 0px;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return <Container>
            
  <Wrapper>

      <Title>SIGN IN</Title>
      <Form>
          <Input placeholder="userName"/>
          <Input placeholder="PassWord"/>
          <Button>LOGIN</Button>
          <Link> Forget Password ?</Link>
          <Link> Create New Account</Link>



      </Form>

  </Wrapper>

</Container>;
};

export default Login;
