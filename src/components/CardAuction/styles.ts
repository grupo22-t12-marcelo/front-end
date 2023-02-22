import { Card } from "reactstrap";
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
  .card {
  }

  .cardInfos {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, black 100%);
    border-radius: 4px 4px 0 0;
  }

  @keyframes go-forwards {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(10px);
    }
  }

  :hover {
    .cardInfos {
      background: linear-gradient(rgba(0, 0, 0, 0.6) 0%, black 100%);
    }
    .abrevName {
      background-color: #36007d;
    }
    .arrowRight {
      animation: go-forwards 1s infinite alternate;
    }
  }
`;

export const CardContainer = styled(Card)`
  background-color: var(--grey7);

  border-radius: 4px 4px 4px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TimerAuction = styled.div`
  background-color: var(--white-fixed);
  border-radius: 32px;
  width: 123px;
  height: 36px;
  padding: 10px;

  margin-bottom: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  time {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);

    padding-left: 15px;
  }

  p {
    font-weight: 500;
    padding-left: 15px;
    color: var(--alert1);
  }
`;

export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: 25px;
  line-height: 20px;
  color: var(--grey10);
  margin: 15px 0;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey5);
  height: 35px;

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
    color: var(--white-fixed);
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
    color: var(--white-fixed);
  }
`;

export const DivRedirectAuction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--brand1);
  height: 60px;
  padding: 24px 36px;
  border-radius: 0 0 4px 4px;

  cursor: pointer;

  & > p {
    font-weight: 600;
    font-size: 16px;
    color: var(--white-fixed);
  }
`;
