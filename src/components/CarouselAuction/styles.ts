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
    display: -webkit-box;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    width: 94%;
    overflow-x: scroll;
    scroll-snap-type: mandatory;
    .div-item-vei {
      text-align: left;
      min-width: 200px;
      height: 388px;
    }
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
      margin-left: 30px;
      margin-right: 30px;
      .div-item-vei {
        min-width: 720px;
        height: 388px;

        padding-right: 30px;
        margin-bottom: 30px;
      }
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
