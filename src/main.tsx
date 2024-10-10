import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    Standalone mode has been disabled for this application since it requires
    imports via the root config import map. For more details see this
    discussion:{" "}
    <a href="https://github.com/WJSoftware/vite-plugin-single-spa/discussions/116">
      https://github.com/WJSoftware/vite-plugin-single-spa/discussions/116
    </a>
    <br></br>
    <br></br>
    In order to run this application, open the root config, and copy this import into the import map override for <b>@fox-poc/mediacloud-ux-router-poc</b> 
    <br></br>
    <br></br>
    <a href={`${window.location.href}src/spa.tsx`}>{`${window.location.href}src/spa.tsx`}</a>
  </StrictMode>
);
