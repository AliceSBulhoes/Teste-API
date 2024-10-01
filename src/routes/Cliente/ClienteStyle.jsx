import styled from 'styled-components';
import { Colors, FontSize } from '../../constant/Var'

export const ClienteStyle = styled.section`
    .container-cliente{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.bg_color};

        .form{
            height: 50vh;
            width: 40%;
            display: flex;
            border-radius:  0 10px 0 10px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 20px 20px 50px 0px rgba(0, 0, 0, 0.197);
            background-color: ${Colors.br_color2};

            .title-form{
                font-size: ${FontSize.ft_title};
                text-transform: uppercase;
                color: ${Colors.ft_color2};
                font-weight: 900;
            }

            .input-container{
                width: 70%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .input-p{
                    font-size: ${FontSize.ft_text};
                    color: ${Colors.ft_color2};
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .input{
                    padding: 7px;
                    background-color: ${Colors.ft_color};
                    border: solid 2px ${Colors.ft_color2};
                    color: ${Colors.bg_color};
                }
            }
        }
    }
`