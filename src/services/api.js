import React, { useEffect, useState } from "react";
import axios from "axios";

import PotionsContext from "./context";

export const PotionsProvider = props => {
  const [data, setData] = useState({ potions: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json"
      );
      setData({
        potions: Object.keys(result.data.potions).map(
          index => result.data.potions[index]
        )
      });
    };
    fetchData();
  }, []);

  return (
    <PotionsContext.Provider value={data}>
      {props.children}
    </PotionsContext.Provider>
  );
};
