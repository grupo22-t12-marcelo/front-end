import styled from "styled-components";

const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey0);

  color: var(--white-fixed);
  min-height: 300px;
  width: 100%;
  p {
    font-size: 14px;
  }
  .btn-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 50px;
    background: var(--grey1);
    border-radius: 4px;
    font-weight: 900;
    font-size: 16px;
    color: var(--grey10);
  }

  @media only screen and (min-width: 756px) {
    flex-direction: row;
    min-height: 140px;
  }
  @media only screen and (max-height: 756px) {
    height: 100px;
    min-height: 0;
  }
`;
export { DivFooter };
