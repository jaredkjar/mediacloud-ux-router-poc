import { useState } from "react";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";

function App() {

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header></Header>
      <Menu></Menu>
    </div>
  );
}

export default App;
