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
  }
`;
