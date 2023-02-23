import styled from "styled-components";

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    div {
      width: 32px;
      height: 32px;
      color: var(--white-fixed);
    }
    h5 {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      color: var(--grey1);
      font-size: 14px;
    }

    span {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-400);
      color: var(--grey3);
      font-size: 12px;
      display: flex;
    }
  }

  #comment-text {
    font-family: var(--body-font-family);
    font-weight: var(--body-1-400);
    color: var(--grey2);
    font-size: 14px;
    text-align: left;
  }
`;

export { CommentDiv };
