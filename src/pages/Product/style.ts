import styled from "styled-components";

const ProductPage = styled.div`
  width: 100%;
  main {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #4529e6 12.25%,
      #f1f3f5 12.26%,
      #f1f3f5 100%
    );
    #aside {
      display: none;
    }

    @media (min-width: 1100px) {
      #aside {
        display: fixed;
      }
    }
  }
`;

export { ProductPage };
