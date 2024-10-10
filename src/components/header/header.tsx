import { AccountButton } from "@fox-poc/mediacloud-ux-styleguide-poc";
import {
  Header as StyledHeader,
  MediaCloudLogo,
  AccountButtonContainer,
} from "./header.styles";

import MediaCloudLogoSVG from "../../assets/mediacloud.svg";

export default function Header({ groups }: { groups: string[] }) {

  const showGroups = () => {
    alert(groups.join(", "));
  }

  return (
    <StyledHeader>
      <MediaCloudLogo src={MediaCloudLogoSVG} />
      <AccountButtonContainer onClick={showGroups}>
        <AccountButton text={'JK'}/>
      </AccountButtonContainer>
    </StyledHeader>
  );
}
