import styled from "styled-components";

export const Container = styled.div`
  .divBlue {
    height: 350px;
    background-color: var(--brand1);

    @media (max-width: 425px) {
      height: 251px;
    }
  }

  .divWhite {
    background-color: var(--grey8);

    & > div {
      width: 100%;
      padding: 10px;
      margin-bottom: 30px;
    }
  }
`;
