import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  height: 320px;

  background: var(--grey10);
  border-radius: 4px;

  padding: 36px 44px;
  margin: -210px auto 0 auto;

  .abrevName {
    width: 104px;
    height: 104px;
    border-radius: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: green;

    & > p {
      font-weight: 500;
      font-size: 36px;
      color: var(--white-fixed);
    }
  }

  .name {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;

    & > h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);

      margin-right: 15px;
    }

    & > p {
      padding: 4px 8px;

      background: var(--brand4);
      border-radius: 4px;

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--brand1);
    }
  }
`;

export const DescriptionUser = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey2);
  height: 52px;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
