import styled from "styled-components";

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--grey10);
  padding: 28px;
  gap: 24px;
  border-radius: 4px;
  max-height: 350px;

  @media (min-width: 1024px) {
    padding: 20px;
    gap: 15px;
  }

  @media (max-height: 756px) {
    height: 220px;
  }

  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-5-600);
    color: var(--heading-color);
    font-size: 20px;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 5px;
    width: 100%;

    @media (max-height: 756px) {
      width: 70%;
      align-self: center;
      margin-right: 10px;
    }

    div {
      width: 90px;
      height: 90px;
      display: flex;
      background-color: var(--grey7);
      border-radius: 4px;

      @media (min-width: 1440px) {
        width: 120px;
        height: 120px;
      }

      @media only screen and (max-height: 756px) {
        height: 70px;
        width: 70px;
      }

      img {
        width: 94px;
        height: 54px;
        object-fit: cover;
      }
    }
  }
`;

export { Photo };
