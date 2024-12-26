import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import HomePageStyles from "./Homepage.module.css";
import HomepageAppleWatchBlackStrap from "../assests/black-watch-belt.jpg";
import HomepageAppleWatchFace from "../assests/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png";

import { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";

const useStyles = makeStyles(
  (theme: {
    palette: { text: { primary: any; secondary: any } };
    spacing: (arg0: number) => any;
  }) => ({})
);
const HomePage = () => {
  const classes = useStyles();
  const [isGetStartedButtonClicked, setIsGetStartedButtonClicked] =
    useState(false);
  return (
    <Box className={HomePageStyles.HomePageContainerCSS}>
      <Box className={HomePageStyles.container}>
        <Header isGetStartedButtonClicked={isGetStartedButtonClicked} />
        <Box style={{ position: "relative",top:'13vh',zIndex:1,margin:'0 auto' }}>
          <Box className={HomePageStyles.landingPageAppleWatchContainer}>
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
        <Box
          // display="flex"
          // flexDirection="column"
          // justifyContent="center"
          // alignItems="center"
          style={{
            textAlign: "left",
            position: "absolute",
            top: "9%",
            zIndex: 2,
            left:'24vw'
          }}
        >
          <Box style={{padding:'0 auto'}}>
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
      </Box>
    </Box>
  );
};

export default HomePage;
