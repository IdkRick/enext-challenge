import React, { useContext } from "react";

import { Container } from "./styles";
import { Potions } from "../Potions";
import PotionsContext from "../../services/context";

export const Products = () => {
  const data = useContext(PotionsContext);

  return (
    <Container>
      <h1>Potions</h1>

      {data.potions.map(potion => (
        <Potions
          key={potion.id}
          name={potion.name}
          image={potion.image}
          price={potion.price}
          effect={potion.effect}
          ingredients={potion.ingredients}
        />
      ))}
    </Container>
  );
};
