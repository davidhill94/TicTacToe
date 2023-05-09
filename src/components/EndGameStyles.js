import styled from "styled-components";

export const EndGameContainer = styled.div`
height: 320px;
width: 320px;
background-color: ${(props) => (props.winner === "X wins!" ? "rgba(231, 24, 37, 0.9)" : props.winner === "O wins!" ? "rgba(64, 201, 54, 0.9)" : "rgba(163, 168, 168, 0.9)")};
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 99;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #000;
border-radius: 10%;
box-shadow: 2px 2px 6px #000;
text-align: center;

@media (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
@media (max-width: 300px) {
    width: 200px;
    height: 200px;
  }
`
export const EndGameText = styled.p`
font-size: 32px;

@media (max-width: 768px) {
    font-size: 24px;
  }
`