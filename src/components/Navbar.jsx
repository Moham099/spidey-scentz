import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
height:60px;
background-color: #c4c4c4;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex:1;
align-items: center;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            </Left>
            <Center>
              <Logo>SPIDEYSCENTZ.</Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem></MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar