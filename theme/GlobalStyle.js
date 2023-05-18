//Estilização global do styled-components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //variaveis
        --bgColor: purple;
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
        background: silver;
        height: 100%;
        width: 100%;
    }

`