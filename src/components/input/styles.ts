import styled from "styled-components";

interface Props {
  backgroundColor: string;
  color: string;
  width: number;
  height: number;
  borderColor?: string;
}

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
  }

  input {
    width: 100%;

    padding: 15px;

    border: 2px solid var(--grey7);
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    color: black;

    transition: 0.5s;
    background: transparent;

    &:hover {
      background-color: var(--grey8);
    }

    &::placeholder {
      color: var(--grey3);
    }

    &:focus {
      background-color: var(--white-fixed);
      border-color: var(--brand2);
      caret-color: var(--brand2);
    }

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }

    &:focus::-moz-placeholder {
      color: transparent;
    }
  }

  span {
    color: var(--alert1);
  }
`;
