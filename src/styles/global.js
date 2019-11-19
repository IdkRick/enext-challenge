import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      outline: none;
      border: none;
   }

   body {
      font-family: 'Roboto', sans-serif;
      overflow-x: hidden;
   }

`;
