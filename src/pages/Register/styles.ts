import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey8);

  section {
    background-color: var(--grey10);
    border-radius: 4px;
    width: 412px;

    margin-top: 50px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 40px;

    h3 {
      margin-bottom: 15px;
      font-weight: var(--heading-4-500);
      font-size: 24px;
      line-height: 30px;
      color: black;
    }

    form {
      text-align: left;

      h5 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: black;
        margin-top: 15px;
        margin-bottom: 20px;
      }

      TextArea {
        margin-bottom: 25px;
      }

      .divInput {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 12px;
      }
    }
    .divButton {
      margin-top: 20px;
    }
  }
`;

export const DivRadio = styled.div`
  input {
    display: none;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
  span {
    width: 164px;
    height: 50px;
    margin-bottom: 20px;
    color: var(--grey0);
    font-weight: var(--heading-2-600);
    border-radius: 4px;
    border: 2px solid var(--grey4);
    cursor: pointer;
  }
  input:checked + span {
    color: var(--white-fixed);
    border: 2px solid transparent;
    background-color: var(--brand1);
  }

  p {
    margin-top: -10px;
    line-height: 0px;
    margin-bottom: 15px;
    font-size: 12px;
    color: var(--alert1);
  }
`;
