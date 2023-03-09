import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    #4529e6 38.25%,
    #f1f3f5 38.26%,
    #f1f3f5 100%
  );
  .divBlue {
    height: 280px;
    background-color: var(--brand1);

    @media (max-width: 425px) {
      height: 251px;
    }
  }
`;
