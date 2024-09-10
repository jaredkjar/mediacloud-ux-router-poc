import { Button } from "@fox/mediacloud-ux-styleguide-poc";

export default function Header() {

  const headerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "stretch",
    marginBottom: "20px",
  };

  return (
    <div style={headerStyle}>
      <Button
        onClick={() => window.history.pushState({}, "", "home")}
        text={'React home!'}
      >
      </Button>
      <Button
        onClick={() => window.history.pushState({}, "", "vue")}
        text={'Vue home!'}
      >
      </Button>
      <Button
        onClick={() => window.history.pushState({}, "", "svelte")}
        text={'Svelte home!'}
      >
      </Button>
    </div>
  );
}
