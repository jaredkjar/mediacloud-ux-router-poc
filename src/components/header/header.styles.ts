import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  background-color: var(--color-menu);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
  position: sticky;
  left: 0px;
  top: 0px;
  height: 83px;
  z-index: 103;
  width: 100%;
`;

export const MediaCloudLogo = styled.img`
  padding-left: 20px;
  cursor: pointer;
`;

export const AccountButtonContainer = styled.div`
  margin-right: 20px;
`;
