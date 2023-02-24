import styled from "styled-components";

export const DivCarousel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: baseline;
  align-items: flex-start;
  background-color: var(--grey8);
  padding: 50px 0;
  width: 100%;
  .title-carousel {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-2-600);
    font-size: 24px;
    line-height: 30px;
    color: var(--grey0);
    margin-left: 30px;
    margin-bottom: 50px;
  }
  .list-card-vehicles {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 95%;
    gap: 40px;
    overflow-x: scroll;
    scroll-snap-type: mandatory;
  }

  @media only screen and (min-width: 756px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: baseline;
    align-items: flex-start;
    background-color: var(--grey8);
    padding: 50px 0;

    .title-carousel {
      font-family: var(--heading-font-family);
      font-weight: var(--heading-2-600);
      font-size: 24px;
      line-height: 30px;
      color: var(--grey0);
      margin-bottom: 50px;
    }
    .list-card-vehicles {
      scroll-behavior: smooth;
      padding-left: 30px;
      padding-right: 30px;
    }
    .list-card-vehicles::-webkit-scrollbar {
      width: 6px;
      height: 4px;
      background: var(--grey7);
    }
    .list-card-vehicles::-webkit-scrollbar-track {
      background-color: var(--grey7);
    }
    .list-card-vehicles::-webkit-scrollbar-thumb {
      background: var(--grey5);
    }
  }
`;
