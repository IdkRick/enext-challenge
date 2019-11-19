import React from "react";

import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { PotionsProvider } from "./services/api";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";

function App() {
  return (
    <PotionsProvider>
      <div className="App">
        <Header />
        <Products />
        <Footer />

        <GlobalStyle />
      </div>
    </PotionsProvider>
  );
}

export default App;
