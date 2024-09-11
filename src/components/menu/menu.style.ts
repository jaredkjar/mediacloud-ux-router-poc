import styled from "styled-components";

export const Menu = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin-right: calc(-1 * calc(100vw - 100%));
  max-width: 100%;
  height: 72px;
`;

export const Sticky = styled.div`
  position: sticky;
  background-color: var(--color-white);
  top: 83px;
  z-index: 9;
  transition: top 0.25s ease-in-out;
`;

interface MenuItemProps {
  isActive: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  ${({ isActive }) =>
    isActive &&
    `
    background-color: rgba(36, 178, 218, .14) !important;
    border-radius: 4px;
`}
  height: 32px;
  white-space: nowrap;
  border: none !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 500;
  height: 32px;
  margin-right: 18px !important;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: Heebo;
  line-height: 30px;
  &:hover {
    background-color: rgba(36, 178, 218, 0.14) !important;
    border-radius: 4px;
  }
`;
