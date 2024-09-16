import { AccountButton } from "@fox/mediacloud-ux-styleguide-poc";
import {
  Header as StyledHeader,
  MediaCloudLogo,
  AccountButtonContainer,
} from "./header.styles";

import MediaCloudLogoSVG from "../../assets/mediacloud.svg";

export default function Header() {
  return (
    <StyledHeader>
      <MediaCloudLogo src={MediaCloudLogoSVG} />
      <AccountButtonContainer>
        <AccountButton text={'JK'}/>
      </AccountButtonContainer>
    </StyledHeader>
  );
}
