import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";

import { Container } from "./styles";

//IMAGES
import logo from "../../assets/img/logo.png";
import bag from "../../assets/img/bag.png";

export const Header = () => {
  const inputRef = React.createRef();

  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <div className={isActive ? "wrapper active" : "wrapper"}>
        <div className="burger" onClick={toggleNav} title="Menu">
          <div className={isActive ? "line1 active" : "line1"}></div>
          <div className={isActive ? "line2 active" : "line2"}></div>
          <div className={isActive ? "line3 active" : "line3"}></div>
        </div>

        <a href="/" className={isActive ? "logo hidden" : "logo"}>
          <img src={logo} alt="Merlin's Potions logo" />
        </a>

        <form className={isActive ? "active" : ""}>
          <label htmlFor="search">
            <span>
              <FaSistrix
                aria-labelledby="Search"
                title="Search"
                color="#d7391e"
                size={20}
                strokeWidth={16}
                autoReverse
              />
            </span>
            <input
              type="search"
              placeholder="Search our stack"
              name="search"
              id="search"
              ref={inputRef}
              onMouseEnter={() => {
                setTimeout(() => {
                  inputRef.current.focus();
                }, 500);
              }}
            />
          </label>
        </form>
        <p className="shipping">
          Free shipping <span>on orders over $50</span>
        </p>
        <div className={isActive ? "bag hidden" : "bag"}>
          <img src={bag} alt="Shopping bag" />
          <p>
            BAG: <span>1</span>
          </p>
        </div>
      </div>
      <nav className={isActive ? "active" : ""}>
        <div className="nav-wrapper">
          <ul>
            <li>
              <a href="/">Potions</a>
            </li>
            <li>
              <a href="/">Ingredients</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">Supplies</a>
            </li>
            <li>
              <a href="/">Charms</a>
            </li>
            <li>
              <a href="/">Clearance!</a>
            </li>
          </ul>

          <div className="join">
            <a href="/">Sign In</a>
            <span>or</span>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </nav>
    </Container>
  );
};
