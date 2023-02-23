import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 17px;
  /* width: 90%; */
  padding: 40px 10px 40px;

  @media (min-width: 768px) {
    padding: 40px 50px 40px;
  }

  @media (min-width: 1024px) {
    padding: 30px 10px 40px;
    width: 600px;

    #photo,
    #info-user {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    margin-left: 120px;
  }
`;

export { Section };
