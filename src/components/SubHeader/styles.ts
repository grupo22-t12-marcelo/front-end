import styled from "styled-components";

export const SubHeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 380px;
    
    background-color: var(--brand2);
    .info-sem-logar{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 748px;
        height: 261px;
        .sub-herder-title{
            font-family: var(--heading-font-family);
            font-weight: var(--heading-1-700);
            font-size: 44px;
            line-height: 56px;
            text-align: center;
            color: var(--grey10);
        }
        .sub-header-subtitle{
            font-family: var(--body-font-family);
            font-weight: var(--body-1-400);
            font-size: 16px;
            line-height: 28px;
            color: var(--grey10);
        }
        .div-buttons-sub-header{
            display: flex;
            gap: 30px;
            .button-sub-header{
                border: 1.5px solid var(--grey10);
                border-radius: 4px;
                width: 180px;
                padding: 12px 28px;
                color: var(--grey10);
                background-color: var(--brand2);

            }
        }
    }
`