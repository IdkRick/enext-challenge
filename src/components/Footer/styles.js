import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.footer`
  margin-top: 60px;
  background: #e4e4e4;

  .wrapper {
    max-width: 1400px;
    width: 100%;
    margin: auto;
    padding: 60px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ${device.desktop} {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 30px 10px;
    }

    .footer-column:first-child {
      @media ${device.desktop} {
        grid-row: 2 / 2;
      }

      nav ul {
        display: flex;
        margin-bottom: 40px;

        @media ${device.desktop} {
          margin-top: 40px;
          justify-content: center;
        }

        @media ${device.mobile} {
          margin: 20px 0;
        }

        li {
          margin-right: 20px;

          @media ${device.mobile} {
            margin-right: 10px;
          }

          a {
            color: #d7391e;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 500;
            transition: all 0.2s ease;

            @media ${device.mobile} {
              font-size: 0.7rem;
            }

            &:hover,
            &:focus {
              color: #523468;
            }
          }
        }

        li:last-child {
          margin-right: 0;
        }
      }

      .social {
        @media ${device.desktop} {
          display: flex;
          justify-content: center;
        }
        a {
          display: inline-block;
          margin-right: 30px;
          background: #523468;
          border-radius: 50%;
          padding: 8px;
          transition: all 0.2s ease;

          @media ${device.mobile} {
            margin-right: 15px;
          }

          &:hover,
          &:focus {
            background: #d7391e;
          }

          span {
            display: flex;

            svg {
              width: 26px;
              height: 26px;

              @media ${device.mobile} {
                width: 18px;
                height: 18px;
              }
            }
          }
        }

        a:last-child {
          margin-right: 0;
        }
      }

      p {
        margin-top: 70px;
        color: #464646;

        @media ${device.desktop} {
          text-align: center;
          margin-top: 40px;
        }
        @media ${device.mobile} {
          font-size: 0.8rem;
        }
      }
    }

    .footer-column:last-child {
      justify-self: flex-end;

      @media ${device.desktop} {
        justify-self: center;
      }

      .newsletter {
        display: inline-block;
        background: #fff;
        border-radius: 6px;
        padding: 30px;

        @media ${device.mobile} {
          padding: 15px;
        }

        p {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 20px;
          color: #313131;

          @media ${device.mobile} {
            font-size: 0.9rem;
          }
        }

        p:first-child {
          font-style: italic;
        }

        form {
          display: flex;

          @media ${device.tablet} {
            display: block;
          }

          label {
            border: 1px solid #523468;
            border-radius: 4px;
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 100%;
            padding-left: 10px;
            margin-right: 10px;

            @media ${device.tablet} {
              margin-bottom: 10px;
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
      }
    }
  }
`;
