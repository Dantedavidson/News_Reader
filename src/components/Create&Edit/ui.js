import Styled, { css } from "styled-components";
import { flexContainer } from "../Utility/mixins";

export const Form = Styled.form`
max-width:920px;
font-size: 1.4rem;
margin: 3rem auto;

h2 {
    text-align: center;
    margin-bottom: 3rem;
}
label {
    width: 150px;
    line-height: 31px;
  }

>div {
    width: 100%;
    margin: 0 auto 3rem auto;
    height: auto;

input,
textarea,
select {
      width: 79%;
}
textarea {
      height: auto;
      min-height: 31px;
      line-height: 31px;
    }
svg {
      margin-left: 0.8rem;
      cursor: pointer;
      transform: translateY(-0.3rem);
    }
}

>div:nth-last-of-type(1) {
    margin: 4rem 2.5% 0 0;
    ${flexContainer("row", "space-between")};
    >div{
      max-width: 450px;
      width:48%;
      height:40px;
      line-height:40px;
      margin:0;
    }
  }

  .error{
      position:absolute;
      transform: translate(9.4rem,2.2rem);
  }
  .control-error{
  color:red;
    
  }

  .error.textarea{
    transform: translate(9.4rem,-2.2rem);
  }

  .controls {
    ${(props) =>
      props.error &&
      css`
        color: red;
      `}
    
  }

   @media(max-width:950px){
     
       width: 90%;
     
  } 
`;
