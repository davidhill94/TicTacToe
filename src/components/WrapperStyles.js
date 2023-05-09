import styled from "styled-components";
import background from '../images/background.png';

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

@media (max-width: 425px) {
    justify-content: center;
  }
`