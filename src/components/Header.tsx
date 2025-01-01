import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
// import AppleIcon from '@mui/icons-material/Apple';
import logo from "../assests/apple-watch-design-studio-logo.jpg";
import HeaderStyles from "./Header.module.css";
import HomePageStyles from "./Homepage.module.css";
import { Key, useRef, useState } from "react";
import { ICollectionsType } from "./interfaces/HomepageInterface";
import { APPLE_WATCH_HERMES_SERIES_10_TEXT, APPLE_WATCH_SE_TEXT, APPLE_WATCH_SERIES_10_TEXT, collectionsTypeList } from "../commonConstants/constants";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface IHeaderProps {
  isGetStartedButtonClicked: boolean;
  handleCollectionTypeChange: (collectionType: ICollectionsType) => void;
  selectedCollectionsType: ICollectionsType;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedWatchFaceName:{name:string ,id:string}
  selectedWatchBandName:{name:string ,id:string}
}
const Header = (props: IHeaderProps) => {
  const {
    isGetStartedButtonClicked,
    handleCollectionTypeChange,
    selectedCollectionsType,
    isModalOpen,
    setIsModalOpen,
    selectedWatchBandName,
    selectedWatchFaceName
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSelectClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsModalOpen(!isModalOpen);
  };
  const getRedirectionLinkForSelectedWatch = (watchCaseId:string,watchBandId:string)=>{
    console.log({watchCaseId,watchBandId})
    let appleWatchDomainPath = "apple-watch"
    if(selectedCollectionsType.typeName===APPLE_WATCH_HERMES_SERIES_10_TEXT){
      appleWatchDomainPath = "apple-watch-hermes"
    }
    else if(selectedCollectionsType.typeName===APPLE_WATCH_SE_TEXT){
      appleWatchDomainPath = "apple-watch-se"
    }
    let url= `https://www.apple.com/shop/buy-watch/${appleWatchDomainPath}?configured=true&option.watch_cases=${watchCaseId}/A&option.watch_bands=${watchBandId}/A&product=Z0YQ&step=select`
    return url
  }
  const handleSaveButtonClick = ()=>{
    let url = getRedirectionLinkForSelectedWatch(selectedWatchFaceName.id,selectedWatchBandName.id)
    window.open(url, '_blank')
  }

  return (
    <Box
      className={`${HeaderStyles.HeaderContainerCSS} ${HomePageStyles.container}`}
      display="flex"
      justifyContent="space-between"
    >
      <img
        src={logo}
        alt="Apple Watch Logo"
        className={HeaderStyles.HeaderlogoCSS}
      />
      {isGetStartedButtonClicked && (
        <Box position="relative" ref={selectRef}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleSelectClick}
            sx={{
              textAlign: "left",
              justifyContent: "space-between",
              fontSize:'17px',
              display: "flex",
              border: "0",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus": {
                backgroundColor: "transparent",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Collections
          </Button>

          {isModalOpen && (
            <Popover
              anchorEl={anchorEl}
              open={isModalOpen}
              anchorOrigin={{
                vertical: "bottom", // Position below the button
                horizontal: "left", // Align to the left of the button
              }}
              transformOrigin={{
                vertical: "top", // Align popover content from top
                horizontal: "left", // Align popover content from left
              }}
              onClose={handleSelectClick}
              sx={{
                left: "-90px",
                "& .MuiDialog-paper": {
                  transition: "transform 0.3s ease-out", // Transition for opening and closing
                  transform: isModalOpen ? "scale(1)" : "scale(0.9)",
                },
                "& .MuiPaper-root": {
                  borderRadius: "18px",
                  textAlign: "center",
                },
              }}
            >
              <Box style={{ padding: "0 26px",width:'320px' }}>
                {/* Content of the modal */}
                <List>
                  {collectionsTypeList.map(
                    (item: ICollectionsType, index: Key | null | undefined) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "18px 0 17px",
                          color: selectedCollectionsType.id === item.id ? "#86868b" : "inherit",
                          // Apply border to all but the last item
                          borderBottom:
                            index !== collectionsTypeList.length - 1
                              ? "1px solid #d2d2d7"
                              : "none",
                        }}
                      >
                        <ListItemButton
                          onClick={() => handleCollectionTypeChange(item)}
                          className={HeaderStyles.CollectionTypeName}
                          sx={{display:'contents'}}
                          disabled={selectedCollectionsType.id === item.id}
                        >
                          <Typography component="a">{item.typeName}</Typography>
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Popover>
          )}
        </Box>
      )}
      {/* Background Overlay (Blur effect) */}
      {isModalOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            transition: "all 0.3s ease", // Smooth transition
            zIndex: 1000,
          }}
        />
      )}
      {isGetStartedButtonClicked && (
        <Button
          color="secondary"
          size="medium"
          onClick={handleSaveButtonClick}
          className={`${HeaderStyles.transitionEffect} ${
            isGetStartedButtonClicked
              ? HeaderStyles.visible
              : HeaderStyles.hidden
          }`}
        >
          Save
        </Button>
      )}
    </Box>
  );
};
export default Header;
