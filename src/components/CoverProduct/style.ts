import styled from "styled-components";

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  @media (min-width: 1100px) {
    height: 300px;
  }
`;

export { Cover };

