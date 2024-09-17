import { useState } from "react";
import { Menu as StyledMenu, Sticky, MenuItem } from "./menu.style";

type MenuItem = {
  title: string;
  page: string;
}

const menuItems = [
  {
    title: "Home",
    page: "home",
  },
  {
    title: "Assets",
    page: "assets",
  },
  {
    title: "Collections",
    page: "collections",
  },
  {
    title: "Replay",
    page: "replay",
  },
  {
    title: "Svelte",
    page: "svelte",
  },
  {
    title: "Vue",
    page: "vue",
  },
];

export default function Menu() {
  
  const append = window.location.hostname === "fox-poc.github.io" ? "/mediacloud-ux-root-config-poc/" : "/";

  const [activePage, setActivePage] = useState(
    menuItems.find(
      (item) => item.page === window.location.pathname.replace(`${append}`, "")
    )?.title || ""
  );

  const onItemClicked = (item : MenuItem ) => {
    setActivePage(item.title);
    window.history.pushState({}, activePage, item.page);
  };

  return (
    <Sticky>
      <StyledMenu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.title}
            $isActive={item.title === activePage}
            onClick={() => onItemClicked(item)}
          >
            {item.title}
          </MenuItem>
        ))}
      </StyledMenu>
    </Sticky>
  );
}
