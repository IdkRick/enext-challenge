import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 70%;
    height: auto;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }

  p {
    font-weight: 700;
    font-size: 1.2rem;

    @media ${device.tablet} {
      font-size: 1rem;
    }

    @media ${device.mobile} {
      font-size: 0.7rem;
    }

    span {
      color: #d7391e;
    }
  }

  .overlay {
    position: fixed;
    background: #000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 989;
    opacity: 1;

    &.active {
      opacity: 0.6;
    }
  }
`;

export const LightBox = styled.article`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  max-height: 500px;
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  z-index: 990;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    max-width: 300px;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
    transition: all 0.2s ease-out;
  }

  .product {
    @media ${device.mobile} {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }

    img {
      max-width: 100%;
      height: auto;
      cursor: unset;

      @media ${device.mobile} {
        max-width: 40%;
      }

      &:hover {
        transform: translateY(0);
      }
    }
  }
  .description {
    @media ${device.mobile} {
      margin: 0 10px 10px;
      align-self: end;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;

      @media ${device.tablet} {
        font-size: 0.8rem;
      }
    }

    h2:first-child {
      color: #d7391e;
    }

    h2 {
      margin-bottom: 15px;

      @media ${device.tablet} {
        font-size: 1.5rem;
      }

      @media ${device.mobile} {
        font-size: 1rem;
        text-align: center;
      }
    }

    h3 {
      margin: 20px 0 5px;

      @media ${device.tablet} {
        font-size: 1rem;
      }
    }

    li {
      @media ${device.tablet} {
        font-size: 0.8rem;
      }
    }

    span {
      color: #d7391e;
      font-size: 1.2rem;
      font-weight: 500;
      display: block;
      margin-bottom: 10px;

      @media ${device.mobile} {
        margin-bottom: 10px;
        font-size: 1rem;
      }
    }
  }

  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    background: none;
    cursor: pointer;
  }
`;
