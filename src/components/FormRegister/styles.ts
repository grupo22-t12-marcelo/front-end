import styled from "styled-components";

export const Container = styled.form`
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

  .divButton {
    margin-top: 20px;
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
