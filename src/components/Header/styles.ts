import { Nav } from "reactstrap";
import styled from "styled-components";


const DivHeader = styled(Nav)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 80px;

    background: var(--grey10);

    .navbar-mobile{
        width: 100%;


        .cadastro-login{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            padding-top: 10px;
            gap: 10px;
            
            max-width: 100%;
            min-width: 100%;
            height: 120px;
            border-top: 2px solid var(--grey6);
            border-left: none;

        }
        .logado-user{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
            border-top: 2px solid var(--grey6) ;
            border-left: none;

            h5{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 28px;
                color: var(--grey2);
            }

        }
    }

    .navbar-desktop{
        display: none;
    }


    @media only screen and (min-width: 768px) {
        width: auto;

        .navbar-mobile{
            display: none;
        }
        .navbar-desktop{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            min-height: 80px;
            padding: 0 20px;
            z-index: 5;
            position: fixed;
            background-color: var(--grey10);
            .navbar-list{
                display: flex;
                align-items: center;
            }
            
            
            .nav-item{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 28px;
                --bs-nav-link-color: var(--grey2);
            }
        }
        }
        .cadastro-login{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
    
            max-width: 370px;
            min-width: 280px;
            height: 80px;
            border-left: 2px solid var(--grey6) ;
    
        }
        .logado-user{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            min-width: 250px;
            border-left: 2px solid var(--grey6) ;
            border-top: none;

            h5{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 28px;
                color: var(--grey2);
            }

        }
        .btn-cadastrar{
            width: 146px;
            height: 48px;
            border: 1.5px solid var(--grey0);
            border-radius: 4px;
            background-color: #ffffff;
            
            color: var(--grey0);
            font-weight: 600;
            font-size: 16px;
        }

`

export { DivHeader };

