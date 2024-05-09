import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    // <h1>Hi there!</h1>
    <App />,
    el
  );
};
// if we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// we are in running through container
// we should export the mount function

export { mount };
