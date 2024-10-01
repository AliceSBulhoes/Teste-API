import styled from 'styled-components';
import { Colors, FontSize } from '../../constant/Var';

export const FooterStyle = styled.section`
    .footer{
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.hd_color};

        .footer-h5{
            font-size: ${FontSize.ft_text};
            text-transform: uppercase;
            color: ${Colors.ft_color};
        }
    }
`