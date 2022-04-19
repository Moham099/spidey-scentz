import styled from 'styled-components'


const Container = styled.div`
height: 30px;
width: 100vw;
background-color: #0d2b68;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: bold;
letter-spacing: 1px;
`


const Announcement = () => {
  return (
    <Container>SUPER DEAL! Buy one oil AND one butter for a DISCOUNT</Container>
  )}

export default Announcement