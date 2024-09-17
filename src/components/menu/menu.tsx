import { useState } from "react";
import { Menu as StyledMenu, Sticky, MenuItem } from "./menu.style";

type MenuItem = {
  title: string;
  page: string;
};

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
    admin: true,
  },
  {
    title: "Svelte",
    page: "svelte",
    admin: true,
  },
  {
    title: "Vue",
    page: "vue",
    admin: true,
  },
];

export default function Menu({ isAdmin }: { isAdmin: boolean }) {
  const append =
    window.location.hostname === "fox-poc.github.io"
      ? "/mediacloud-ux-root-config-poc/"
      : "/";

  const enabledMenuItems = isAdmin
    ? menuItems
    : menuItems.filter((item) => !item.admin);

  const [activePage, setActivePage] = useState(
    enabledMenuItems.find(
      (item) => item.page === window.location.pathname.replace(`${append}`, "")
    )?.title || ""
  );

  const onItemClicked = (item: MenuItem) => {
    setActivePage(item.title);
    window.history.pushState({}, activePage, item.page);
  };
  
  // go to first available page if there is no route or a bad route.
  if(activePage === "") {
    onItemClicked(enabledMenuItems[0]);
  }

  return (
    <Sticky>
      <StyledMenu>
        {enabledMenuItems.map((item) => (
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
