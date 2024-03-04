import React from "react";

import App from "./App";
import "./App.css";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
  });
});
