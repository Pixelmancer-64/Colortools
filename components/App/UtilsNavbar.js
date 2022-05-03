import Slider from "./Slider";
import {
  UtilsNavbarContainer,
  SliderContainer,
  SideContainer,
  CopyArrayButton,
} from "../styles/UtilsNavbar.styled";
import Select from "./Select";
import { options } from "../helpers/Color.helper";
import CopyToClipBoard from "../helpers/CopyToClipboard";
import { Rainbow } from "../styles/Alert.styled";
import { Logo } from "../styles/Navbar.styled";

export default function UtilsNavbar({
  setLevel,
  setFormat,
  format,
  array,
  openAlert,
}) {
  return (
    <UtilsNavbarContainer>
      <Logo href='/'>
        ColorTools
      </Logo>
      <SliderContainer>
        <Slider min={100} max={900} step={100} onChange={(e) => setLevel(e)} />
      </SliderContainer>
      <SideContainer>
        <CopyArrayButton
          onClick={() => {
            CopyToClipBoard(JSON.stringify(array));
            openAlert(
              <>
                <Rainbow>Array</Rainbow> copied!
              </>
            );
          }}
        >
          <span>Copy array</span>
        </CopyArrayButton>
        <Select
          onChange={(e) => setFormat(e.target.value)}
          options={options}
          selected={format}
        />
      </SideContainer>
    </UtilsNavbarContainer>
  );
}
