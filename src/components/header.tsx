export default function Header(props) {
  const buttonStyle: React.CSSProperties = {
    margin: "0 10px",
    height: "50px",
    width: "160px",
    backgroundColor: "#405cf5",
    borderRadius: "6px",
    fontSize: "100%",
    padding: "0 25px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  };

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
      <button
        style={buttonStyle}
        onClick={() => window.history.pushState({}, "", "home")}
      >
        React home!
      </button>
      <button
        style={buttonStyle}
        onClick={() => window.history.pushState({}, "", "vue")}
      >
        Vue home!
      </button>
      <button
        style={buttonStyle}
        onClick={() => window.history.pushState({}, "", "svelte")}
      >
        Svelte home!
      </button>
    </div>
  );
}
