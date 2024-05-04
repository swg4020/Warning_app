import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const glovalpadding = {
  paddingO: "30px 20px",
};

export const glovalcolor = {
  color: "white",
};

export const GlobalStyled = createGlobalStyle`

    ${reset}
    
    *{
        box-sizing:border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #dbdbdb;
        letter-spacing: -1px;      
    }

    a{
        text-decoration: none;
        color: #1d1d1d;
    }

    img{
        width: 100%;
        display: block;
    }

`;
