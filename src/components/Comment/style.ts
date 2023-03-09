import styled from "styled-components";

const colors = [
  "#E34D8C",
  "#C04277",
  "#7D2A4D",
  "#7000FF",
  "#6200E3",
  "#36007D",
  "#349974",
  "#2A7D5F",
  "#153D2E",
  "#6100FF",
  "#5700E3",
  "#30007D",
];

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  .div-editar-comentario{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

    .div-btns-editar-excluir{
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      width: 20%;

      .excluir {
        background-color: var(--alert2);
        color: var(--alert1);
        border: 1.5px solid transparent;
      }
      button{
        width: 100px;
      }
       @media (min-width: 768px) {
        flex-direction: column;
        width: 20%;
        height: 70px;
      }


    }
    .input-textera{
      display: flex;
      align-items: center;
      width: 250px;
      margin-top: 15px;

      @media (min-width: 768px) {
        width: 500px;
      }

      @media (min-width: 1440px) {
        width: 500px;
      }

    }

  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;

    .div-circle-name-date{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;

    }

    #editicon{
      width: 20px;
      height: 20px;
      color: var(--grey3);
      justify-self: end;
    }

    div {
      width: 32px;
      height: 32px;
      color: var(--white-fixed);
    }
    h5 {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      color: var(--grey1);
      font-size: 14px;
    }

    span {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-400);
      color: var(--grey3);
      font-size: 12px;
      display: flex;
    }
  }

  .comment-text {
    font-family: var(--body-font-family);
    font-weight: var(--body-1-400);
    color: var(--grey2);
    font-size: 14px;
    text-align: left;
  }

  .circleUser {
    width: 32px;
    height: 32px;
    border-radius: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: ${colors[Math.floor(Math.random() * colors.length)]};

    & > p {
      font-weight: 500;
      font-size: 14px;
      color: var(--white-fixed);
    }
  }
`;

export { CommentDiv };

