import styled from "styled-components";

const Circle = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  background-color: var(--brand1);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-height: 756px) {
    height: 55px;
    width: 55px;
  }
  p {
    color: var(--white-fixed);
    text-transform: uppercase;
  }
`;

export { Circle };
