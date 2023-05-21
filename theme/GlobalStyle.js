//Estilização global do styled-components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //variaveis
        --bgColor: #5950A1;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins';
        box-sizing: border-box;
    }
    body {
        display: flex;
        justify-content: center;
        background: #1a1033;
        height: 100%;
        width: 100%;
    }
    h1, h2, h3, h4, h5 {
        margin-left: 20px;
    }

`