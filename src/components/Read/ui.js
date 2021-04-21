import Styled from "styled-components";
import { flexContainer } from "../Utility/mixins";

export const Grid = Styled.div`
 margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  row-gap: 3rem;
  column-gap: 3rem;
  justify-content: center;

  @media(max-width:1360px){
    grid-template-columns: repeat(3, 300px);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 300px);
  }
`;

export const SearchBar = Styled.div`
${flexContainer("row", "center")};
  margin: 3rem auto 0 auto;
  width: 60%;
  font-size: 2rem;
  label,
  input {
    height: 44px;
    line-height: 44px;
  }
  label {
    white-space: nowrap;
    margin-right: 3rem;
    font-weight: 700;
  }
  >div{
    &:nth-child(1) {
      flex-grow: 2;
      margin-right: auto;
    }
    &:nth-child(2) {
      flex-grow: 1;
      transform: translateX(20%)
    }
  }
`;

export const NotFound = Styled.div`
height:50vh;
text-align:center;
h3{

    font-size: 2rem;
    font-weight: 700;
    position: absolute;
    top: 30%;
    width:100%;
    
    
}
`;
