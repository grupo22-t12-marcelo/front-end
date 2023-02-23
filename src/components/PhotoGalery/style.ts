import styled from "styled-components";

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  background-color: var(--grey10);
  padding: 28px;
  gap: 24px;
  border-radius: 4px;
  /* width: 440px; */
  /* height: 377px; */
  max-height: 350px;

  @media (min-width: 1024px) {
    padding: 20px;
    height: 280px;
    gap: 15px;
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
    div {
      width: 90px;
      height: 90px;
      display: flex;
      background-color: var(--grey7);
      border-radius: 4px;

      img {
        width: 94px;
        height: 54px;
        object-fit: cover;
      }
    }
  }
`;

export { Photo };
