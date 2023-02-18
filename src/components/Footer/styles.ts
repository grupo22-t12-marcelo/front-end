 import styled from 'styled-components'

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #0B0D0D;

    color: #FFFFFF;
    height: 300px;
    width: 100%;
    p{
        font-size: 14px;
    }
    .btn-footer{
        width: 53px;
        height: 50px;
        background: #212529;
        border-radius: 4px;
        font-weight: 900;
        font-size: 16px;
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        height: 140px;
        
    }

`
export { DivFooter }

