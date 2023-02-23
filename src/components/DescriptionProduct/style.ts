import styled from "styled-components";

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 24px;

  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-5-600);
    color: var(--heading-color);
    font-size: 20px;
  }

  p {
    font-family: var(--body-font-family);
    font-weight: var(--body-1-400);
    color: var(--grey2);
    font-size: 16px;
    text-align: left;
  }
`;

export { Description };
