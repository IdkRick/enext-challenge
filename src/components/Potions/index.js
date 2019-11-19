import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { Container, LightBox } from "./styles";
import { Button } from "../../styles/button";

export const Potions = ({ name, image, price, effect, ingredients }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleLightBox = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <img
        src={`https://raw.githubusercontent.com/enext-wpp/challenges/master/challenge-one/src/assets/images/products/${image}`}
        alt={name}
        onClick={toggleLightBox}
      />
      <p>
        {name} - <span>{`$${price}`}</span>
      </p>
      <LightBox className={isActive ? "active" : ""}>
        <div className="product">
          <img
            src={`https://raw.githubusercontent.com/enext-wpp/challenges/master/challenge-one/src/assets/images/products/${image}`}
            alt={name}
          />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <h3>Use/Effect:</h3>
          <p>{effect}</p>
          <h3>Ingredients:</h3>
          <ol>
            {ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ol>
          <h3>Price:</h3>
          <span>{`$${price}`}</span>
          <Button>Add to Cart</Button>
        </div>
        <button className="close" onClick={toggleLightBox}>
          <FaTimes size={24} />
        </button>
      </LightBox>
      <div
        className={isActive ? "overlay active" : ""}
        onClick={toggleLightBox}
      ></div>
    </Container>
  );
};
