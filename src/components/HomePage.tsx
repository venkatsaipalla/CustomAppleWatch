import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import HomePageStyles from "./Homepage.module.css";
import HomepageAppleWatchBlackStrap from "../assests/black-watch-belt.jpg";
import HomepageAppleWatchFace from "../assests/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png";

import { useEffect, useRef, useState } from "react";
import {
  ICaseType,
  ICollectionsType,
  ICustomizeOption,
  ISelectedWatchTypes,
  IWatchSizes,
} from "./interfaces/HomepageInterface";
import {
  ALUMINIUM_TEXT,
  APPLE_WATCH_SERIES_10_TEXT,
  SOLO_LOOP_TEXT,
} from "../commonConstants/constants";
import SelectedWatchInformation from "./SelectedWatchInformation";
import AppleWatchCustomizeOptions from "./AppleWatchCustomizeOptions";

const useStyles = makeStyles(
  (theme: {
    palette: { text: { primary: any; secondary: any } };
    spacing: (arg0: number) => any;
  }) => ({})
);
const HomePage = () => {
  const classes = useStyles();
  const [isGetStartedButtonClicked, setIsGetStartedButtonClicked] =
    useState(true);
  const [selectedCollectionsType, setSelectedCollectionsType] =
    useState<ICollectionsType>({
      id: 1,
      typeName: APPLE_WATCH_SERIES_10_TEXT,
    });
  const [selectedCustomizeOption, setSelectedCustomizeOption] =
    useState<ICustomizeOption>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCollectionTypeChange = (collectionType: ICollectionsType) => {
    setSelectedCollectionsType(collectionType);
    setIsModalOpen(!isModalOpen);
  };
  const [selectedWatchCase, setSelectedWatchCase] = useState<ICaseType>(ALUMINIUM_TEXT);
  const [selectedWatchBand, setSelectedWatchBand] = useState(SOLO_LOOP_TEXT);
  const [selectedWatchSize, setSelectedWatchSize] =
    useState<IWatchSizes>("46mm");
  const [selectedWatchType, setSelectedWatchType] =
    useState<ISelectedWatchTypes>({
      size: selectedWatchSize,
      caseType: selectedWatchCase,
      bandType: selectedWatchBand,
      collectionType: selectedCollectionsType,
      title: `${selectedWatchSize} Jet Black ${selectedWatchCase} Case with Black ${selectedWatchBand}`,
      cost: "$429",
    });
  useEffect(() => {
    if (isGetStartedButtonClicked) {
      setSelectedWatchType({
        size: selectedWatchSize,
        caseType: selectedWatchCase,
        bandType: selectedWatchBand,
        collectionType: selectedCollectionsType,
        title: `${selectedWatchSize} Jet Black ${selectedWatchCase} Case with Black ${selectedWatchBand}`,
        cost: "$429",
      });
    }
  }, [isGetStartedButtonClicked,selectedWatchSize,selectedWatchCase,selectedWatchBand,selectedCollectionsType]);
  return (
    <Box className={HomePageStyles.HomePageContainerCSS}>
      <Box className={HomePageStyles.container}>
        <Header
          isGetStartedButtonClicked={isGetStartedButtonClicked}
          handleCollectionTypeChange={handleCollectionTypeChange}
          selectedCollectionsType={selectedCollectionsType}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Box
          display="flex"
          // flexDirection="column"
          justifyContent="center"
          // alignItems="center"
          style={{
            position: "relative",
            top: isGetStartedButtonClicked ? "6vh" : "13vh",
            zIndex: 1,
            margin: "0 auto",
          }}
        >
          <Box
            className={`${HomePageStyles.landingPageAppleWatchContainer} ${
              isGetStartedButtonClicked
                ? HomePageStyles.landingPageAppleWatchContainerWhenGetStartedClicked
                : ""
            }`}
          >
            <img
              src={HomepageAppleWatchBlackStrap}
              alt="Apple Watch black Strap"
              className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
            />
            <img
              src={HomepageAppleWatchFace}
              alt="Apple Watch face"
              className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchFace}`}
            />
          </Box>
        </Box>
        {!isGetStartedButtonClicked && (
          <Box
            style={{
              textAlign: "left",
              position: "absolute",
              top: "9%",
              zIndex: 2,
              left: "24vw",
            }}
          >
            <Box style={{ padding: "0 auto" }}>
              <Typography
                variant="h1"
                component="h1"
                tabIndex={-1}
                className={HomePageStyles.headline}
              >
                <span className={HomePageStyles.collectionName}>
                  Apple Watch Studio
                </span>
                <br />
                Choose a case.
                <br />
                Pick a band.
                <br />
                Create your own style.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsGetStartedButtonClicked(true)}
                style={{
                  marginTop: "43px",
                  fontSize: "17px",
                  padding: "11px 21px",
                }}
                size="large"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        )}
        {isGetStartedButtonClicked && (
          <Box>
            <br />
            <br />
            <br />
            <SelectedWatchInformation
              selectedCollectionsType={selectedCollectionsType}
              selectedWatchType={selectedWatchType}
            />
          </Box>
        )}
        {isGetStartedButtonClicked && (
          <AppleWatchCustomizeOptions
            setSelectedCustomizeOption={setSelectedCustomizeOption}
            selectedCustomizeOption={selectedCustomizeOption}
            setSelectedWatchCase={setSelectedWatchCase}
            selectedWatchCase={selectedWatchCase}
            setSelectedWatchBand={setSelectedWatchBand}
            selectedWatchBand={selectedWatchBand}
            setSelectedWatchSize={setSelectedWatchSize}
            selectedWatchSize={selectedWatchSize}
          />
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
