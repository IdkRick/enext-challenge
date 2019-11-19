import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.header`
  .wrapper {
    max-width: 1400px;
    margin: auto;
    padding: 20px 0;
    width: 95%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    grid-column-gap: 3rem;
    position: relative;

    @media ${device.desktop} {
      grid-template-columns: 10% 40% 30% 20%;
      grid-column-gap: 0;
      padding: 10px 0;
    }

    @media ${device.tablet} {
      grid-template-columns: 20% auto 20%;
      align-items: center;

      &.active {
        grid-template-columns: 10% auto;

        @media ${device.mobile} {
          grid-template-columns: 15% auto;
        }
      }
    }

    @media ${device.mobile} {
      padding: 10px 0;
    }

    .burger {
      display: none;
      cursor: pointer;

      @media ${device.desktop} {
        display: block;
        align-self: center;
      }

      div {
        width: 26px;
        height: 3px;
        background: #523468;
        border-radius: 4px;
        margin: 5px;
        transition: all 0.5s ease;
      }

      .line1.active {
        transform: rotate(-45deg) translate(-6px, 5px);
      }

      .line2.active {
        opacity: 0;
        transform: translateX(-100%);
      }

      .line3.active {
        transform: rotate(45deg) translate(-6px, -5px);
      }
    }

    .logo {
      @media ${device.desktop} {
        justify-self: flex-start;
      }

      @media ${device.tablet} {
        justify-self: center;

        &.hidden {
          display: none;
        }
      }

      @media ${device.mobile} {
        text-align: center;
      }

      & > img {
        max-width: 100%;
        height: auto;

        @media ${device.desktop} {
          max-width: 95%;
        }

        @media ${device.tablet} {
          max-width: 90%;
        }

        @media ${device.mobile} {
          max-width: 80%;
          text-align: center;
        }
      }
    }

    form {
      @media ${device.tablet} {
        display: none;

        &.active {
          display: block;
        }
      }
      label {
        border: 1px solid #523468;
        border-radius: 4px;
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100%;

        span {
          margin: 0 10px;
        }

        input {
          border: none;
          width: 100%;
          height: 35px;
          font-size: 1rem;
          opacity: 0.6;
          margin: 2px;
        }
      }
    }

    .shipping {
      font-size: 1.4rem;
      font-weight: 500;
      font-style: italic;
      color: #d7391e;
      display: flex;
      flex-direction: column;
      justify-self: flex-end;
      text-align: center;

      @media ${device.desktop} {
        position: absolute;
        top: 100%;
        left: -5%;
        width: 110%;
        background: #ececec;
        color: #787878;
        font-size: 1rem;
        padding: 5px 0;
        display: block;
      }

      span {
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .bag {
      display: flex;
      align-items: flex-start;
      justify-self: end;

      @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        justify-self: flex-end;

        &.hidden {
          display: none;
        }
      }

      & > img {
        @media ${device.mobile} {
          max-width: 60%;
          height: auto;
        }
      }

      p {
        font-weight: bold;
        color: #aaa;
        margin: 15px 0 0 5px;

        @media ${device.tablet} {
          margin: 0px 0 0 5px;
          font-size: 0.8rem;
        }

        span {
          color: #d7391e;
        }
      }
    }
  }

  nav {
    background: #523468;

    @media ${device.desktop} {
      position: absolute;
      width: 100%;
      transform: translateX(-100%);
      opacity: 0;
      transition: all 0.2s ease;
      z-index: 888;
    }

    &.active {
      transform: translateX(0%);
      opacity: 1;
    }

    .nav-wrapper {
      max-width: 1400px;
      margin: auto;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0 40px;

      @media ${device.desktop} {
        display: block;
        flex-direction: column;
        height: 100%;
        padding: 0;
      }

      ul {
        display: flex;
        align-items: center;

        @media ${device.desktop} {
          flex-direction: column;
          align-items: flex-start;
        }

        li {
          @media ${device.desktop} {
            border-bottom: 1px solid rgba(242, 242, 242, 0.2);
            width: 100%;
            margin: 0;
          }

          a {
            color: #fdfdfd;
            display: block;
            font-weight: 500;
            padding: 14px 20px;
            margin-right: 20px;
            transition: all 0.2s ease;

            @media ${device.desktop} {
              margin-right: 0;
            }

            &:hover,
            &:focus {
              color: #d7391e;
              background: #422a53;
              border-radius: 4px;
            }
          }
        }
      }

      .join {
        @media ${device.desktop} {
          padding: 20px;
          text-align: center;
        }

        a {
          color: #fdfdfd;
          transition: all 0.2s ease;
          font-weight: 500;

          &:hover,
          &:focus {
            color: #d7391e;
          }
        }

        span {
          margin: 0 15px;
          color: #aaa;
        }
      }
    }
  }
`;
