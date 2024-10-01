import styled from 'styled-components';
// Importando constantes
import { Colors, FontSize } from '../../constant/Var';

export const NavStyle = styled.section`
    .nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        height: 10vh;
        background-color: ${Colors.hd_color};
    

        .nav-link{
            text-decoration: none;
            text-transform: uppercase;
            transition: ease 1s;
            color: ${Colors.ft_color};
            font-size: ${FontSize.ft_nav};
        }

        .nav-link:hover{
            transform: scale(1.1);
            transition: ease 1s;
            color: ${Colors.ft_color2};
        }
    }
`