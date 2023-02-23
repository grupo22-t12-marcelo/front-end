import styled from "styled-components";

export const BackgroundModalExcluir = styled.section`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  position: fixed;

  padding-top: 100px;
`;

export const DivContentExcluir = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-weight: var(--heading-7-600);
    color: black;
  }

  p {
    font-weight: 400;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 22px;
    border: none;
    border-radius: 4px;
    font-weight: var(--heading-7-600);
  }

  .cancelar {
    background-color: var(--grey6);
    color: var(--grey2);
  }

  .excluir-anuncio {
    background-color: var(--alert2);
    color: var(--alert1);
  }


  @media screen and (min-width: 415px) {
    justify-content: end;
    gap: 10px;
  }
`;
