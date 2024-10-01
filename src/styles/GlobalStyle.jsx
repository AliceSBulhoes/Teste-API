import { createGlobalStyle } from 'styled-components';
// Importando constantes
import { FontMont } from '../constant/Var';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${FontMont.ft_family};
    }
`