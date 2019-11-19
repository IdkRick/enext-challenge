import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaTumblr,
  FaGooglePlusG
} from "react-icons/fa";

import { Container } from "./styles";
import { Button } from "../../styles/button";

export const Footer = () => {
  const inputRef = React.createRef();

  return (
    <Container>
      <div className="wrapper">
        <div className="footer-column">
          <nav>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <a href="#">
              <span>
                <FaFacebookF
                  aria-labelledby="Facebook"
                  title="Facebook"
                  color={"#fff"}
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FaTwitter
                  aria-labelledby="Twitter"
                  title="Twitter"
                  color={"#fff"}
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FaPinterestP
                  aria-labelledby="Pinterest"
                  title="Pinterest"
                  color={"#fff"}
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FaTumblr
                  aria-labelledby="Tumblr"
                  title="Tumblr"
                  color={"#fff"}
                />
              </span>
            </a>
            <a href="#">
              <span>
                <FaGooglePlusG
                  aria-labelledby="GooglePlus"
                  title="GooglePlus"
                  color={"#fff"}
                />
              </span>
            </a>
          </div>
          <p>&copy; 2015 Merlin's Potions. All Rights Reserved</p>
        </div>
        <div className="footer-column">
          <div className="newsletter">
            <p>Sign up for our Newsletter</p>
            <p>Sign up for our newsletter &amp; get exclusive discounts!</p>
            <form>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  ref={inputRef}
                  onMouseEnter={() => {
                    setTimeout(() => {
                      inputRef.current.focus();
                    }, 500);
                  }}
                />
              </label>
              <Button type="button">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
