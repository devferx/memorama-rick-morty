import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --white: #ffffff;
        --black-1: #202020;
        --primary: #289144;
        --grey: #929292;
        --blue: #00afc7;
        --yellow: #f4ed1f;
        --headline1: 700 2.5rem / normal "Roboto Condensed";
        --subtitle1: 700 1.625rem/1.5rem "Roboto Condensed";
        --button: 700 0.875rem/1rem "Roboto";
        --headline2: 700 1.5rem / normal "Roboto";
        --body1-regular: 400 0.875rem/1.5rem "Roboto";
        --body1-bold: 700 0.875rem/1rem "Roboto";
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 100%;
        min-height: 100vh;
        background: url("/src/assets/images/bg.png"), #01071a;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }

      .wrapper {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}
  />
);
