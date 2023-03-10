import styled from "styled-components";

export const SubHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 420px;
  background-color: var(--brand2);

  .info-sem-logar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .sub-herder-title {
      font-family: var(--heading-font-family);
      font-weight: var(--heading-1-600);
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      color: var(--grey10);
    }
    .sub-header-subtitle {
      font-family: var(--body-font-family);
      font-weight: var(--body-1-400);
      font-size: 16px;
      line-height: 28px;
      color: var(--grey10);
    }
    .div-buttons-sub-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
      .button-sub-header {
        border: 1.5px solid var(--grey10);
        border-radius: 4px;
        width: 150px;
        padding: 8px;
        color: var(--grey10);
        background-color: var(--brand2);
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 450px;

    .info-sem-logar {
      width: 748px;
      height: 261px;
      .sub-herder-title {
        font-size: 44px;
        line-height: 56px;
      }
      .sub-header-subtitle {
        font-weight: var(--heading-1-700);
        font-size: 16px;
      }
      .div-buttons-sub-header {
        gap: 30px;
        flex-direction: row;

        .button-sub-header {
          width: 180px;
          padding: 12px 28px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    #4529e6 38.25%,
    #f1f3f5 38.26%,
    #f1f3f5 100%
  );
  .divBlue {
    height: 280px;
    background-color: var(--brand1);

    @media (max-width: 425px) {
      height: 251px;
    }
  }
`;
