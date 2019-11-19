import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.section`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    grid-column: 1 / 4;
    margin: 60px 30px 0;
    font-size: 2.5rem;
    color: #d7391e;

    @media ${device.tablet} {
      grid-column: 1 / 3;
      font-size: 2rem;
    }

    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  }
`;
