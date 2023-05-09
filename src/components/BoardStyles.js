import styled from "styled-components";

export const BoardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 150px);
height: 450px;
place-items: center;
justify-content: center;
background-color: transparent;

@media (max-width: 768px) {
    grid-template-columns: repeat(3, 125px);
    height: 375px;
  }
@media (max-width: 425px) {
    margin: 16px 0;
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(3, 90px);
    height: 320px;
  }
`