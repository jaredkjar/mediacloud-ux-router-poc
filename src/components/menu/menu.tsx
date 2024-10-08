import { useState } from "react";
import { Menu as StyledMenu, Sticky, MenuItem } from "./menu.style";

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
    
  const [activePage, setActivePage] = useState(
    menuItems.find(
      (item) => item.page === window.location.pathname.replace("/", "")
    )?.title || ""
  );

  const onItemClicked = (item) => {
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
            onClick={(e) => onItemClicked(item)}
          >
            {item.title}
          </MenuItem>
        ))}
      </StyledMenu>
    </Sticky>
  );
}
