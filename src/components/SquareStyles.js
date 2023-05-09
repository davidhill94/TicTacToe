import styled from 'styled-components';
import logo from '../images/logo.png';

export const SquareButton = styled.button`
height: 100px;
width: 100px;
border-radius: 10%;
box-shadow: 2px 2px 6px #000;
font-size: 96px;
display: flex;
align-items: center;
justify-content: center;
margin: 16px;
background-color: #f3f4f4;
cursor: pointer;
background-image: ${(props) => (props.value ? null : `url(${logo})`)};
background-size: 90px;
background-repeat: no-repeat;
background-position: center;

&:hover{
    box-shadow: inset 0px 0px 2px #000;
}

@media (max-width: 768px) {
    height: 105px;
    width 105px;
    font-size: 80px;
  }
@media (max-width: 425px) {
    height: 90px;
    width 90px;
    font-size: 72px;
    background-size: 75px;
  }
@media (max-width: 300px) {
    height: 75px;
    width 75px;
    font-size: 72px;
  }
`