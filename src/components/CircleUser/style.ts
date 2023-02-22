import styled from "styled-components";

const Circle = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  background-color: var(--brand1);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: var(--white-fixed);
    text-transform: uppercase;
  }
`;

export { Circle };
