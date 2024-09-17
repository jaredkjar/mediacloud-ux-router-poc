import Header from "./components/header/header";
import Menu from "./components/menu/menu";

function App(props: { groups: string[]; token: string }) {

  const { groups = [], token = "" } = props;

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header groups={groups}></Header>
      <Menu isAdmin={groups?.includes("admin")}></Menu>
    </div>
  );
}

export default App;
