import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: 120px;
  right: 181px;
  max-width: 440px;
  @media (min-width: 1024px) {
    top: 100px;
    right: 50px;
    width: 400px;
  }

  @media (min-width: 1440px) {
    width: 500px;
    right: 100px;
  }

  @media (min-width: 1780px) {
    width: 500px;
    right: 200px;
  }
`;

const AsideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 10px;

  @media (min-width: 1024px) {
    gap: 20px;
  }

  .cyDJVF {
    width: 440px;
    height: 377px;
  }
  .kLmEfL {
    width: 440px;
    height: 426px;
  }
`;

export { Aside, AsideBox };
