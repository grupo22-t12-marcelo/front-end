import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 40px 10px 40px;

  @media (min-width: 768px) {
    padding: 40px 50px 40px;
  }

  @media (min-width: 1100px) {
    padding: 30px 10px 40px;
    margin-left: 50px;
    width: 600px;

    #photo,
    #info-user {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    margin-left: 150px;
    width: 700px;
  }

  @media (min-width: 1700px) {
    margin-left: 300px;
    width: 800px;
  }
`;

export { Section };
