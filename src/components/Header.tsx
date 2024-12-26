import { Box } from "@mui/material";
// import AppleIcon from '@mui/icons-material/Apple';
import logo from "../assests/apple-watch-design-studio-logo.jpg";
import HeaderStyles from "./Header.module.css";
interface IHeaderProps {
  isGetStartedButtonClicked: boolean;
}
const Header = (props: IHeaderProps) => {
  const { isGetStartedButtonClicked } = props;
  return (
    <Box
      className={HeaderStyles.HeaderContainerCSS}
      display="flex"
      justifyContent="space-between"
    >
      <img
        src={logo}
        alt="Apple Watch Logo"
        className={HeaderStyles.HeaderlogoCSS}
      />
    </Box>
  );
};
export default Header;