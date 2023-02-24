import styled from "styled-components";

const colors = [
  "#E34D8C",
  "#C04277",
  "#7D2A4D",
  "#7000FF",
  "#6200E3",
  "#36007D",
  "#349974",
  "#2A7D5F",
  "#153D2E",
  "#6100FF",
  "#5700E3",
  "#30007D",
];

export const Container = styled.div`
  width: 300px;
  height: 350px;
  cursor: pointer;

  :hover {
    .image {
      border: 2px solid var(--brand1);
    }
    img {
      transform: scale(1.3);
    }
  }
`;

export const ImageVehicle = styled.div`
  width: 300px;
  height: 150px;
  background-color: var(--grey7);
  overflow: hidden;

  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
  }
`;

export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey1);
  margin: 15px 0;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey2);
  height: 48px;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;

  & > h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    margin-left: 10px;
  }

  div {
    width: 32px;
    height: 32px;
    border-radius: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: ${colors[Math.floor(Math.random() * colors.length)]};

    & > p {
      font-weight: 500;
      font-size: 14px;
      color: var(--white-fixed);
    }
  }
`;

export const InfosVehicle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .infoDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .infoDiv p {
    background-color: var(--brand4);
    border-radius: 4px;
    padding: 4px 8px;
    height: 32px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--brand1);

    margin-right: 5px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);
  }
`;
