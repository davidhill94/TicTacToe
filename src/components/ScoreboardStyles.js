import styled from "styled-components";

export const ScoreboardContainer = styled.div`
height: 75px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;

@media (max-width: 425px) {
    flex-direction: column;
  }
`
export const XScore = styled.p`
margin: 0 32px;
border: none;
border-left: ${(props) => (props.player ? "16px solid #e71825" : "none")};
padding-left: 16px;
background-color: transparent;
font-size: 32px;
color: #fff;
text-align: center;

@media (max-width: 768px) {
    font-size: 24px;
  }
@media (max-width: 425px) {
    border-right: ${(props) => (props.player ? "16px solid #e71825" : "none")};
    border-left: none;
    padding-right: 16px;
    padding-left: 0;
  }
`
export const OScore = styled.p`
margin: 0 32px;
border: none;
border-right: ${(props) => (props.player ? "none" : "16px solid #40C936")};
padding-right: 16px;
background-color: transparent;
font-size: 32px;
color: #fff;

@media (max-width: 768px) {
    font-size: 24px;
  }
`