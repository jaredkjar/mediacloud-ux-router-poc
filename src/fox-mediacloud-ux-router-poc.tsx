import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const RenderApp = (props) => {
  return (
    <React.StrictMode>
      <Root name="@fox-mediacloud-ux-router-poc" />
    </React.StrictMode>
  );
};

const lifecycles = singleSpaReact({
  renderType: "createRoot",
  React,
  ReactDOM,
  rootComponent: RenderApp,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
