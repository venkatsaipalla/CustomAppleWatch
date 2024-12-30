import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import HomePageStyles from "./Homepage.module.css";
import HomepageAppleWatchBlackStrap from "../assests/black-watch-belt.jpg";
import HomepageAppleWatchFace from "../assests/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ReactComponent as LeftIcon } from "../assests/svg/left_arrow_icon.svg";
import { ReactComponent as RightIcon } from "../assests/svg/right_arrow_icon.svg";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import stainless_steel_band_1 from "../assests/stainlessSteelBands/1.jpg";
import stainless_steel_band_2 from "../assests/stainlessSteelBands/2.jpg";
import stainless_steel_band_3 from "../assests/stainlessSteelBands/3.jpg";
import stainless_steel_band_4 from "../assests/stainlessSteelBands/4.jpg";
import stainless_steel_band_5 from "../assests/stainlessSteelBands/5.jpg";
import stainless_steel_band_6 from "../assests/stainlessSteelBands/6.jpg";
import sport_loop_band_1 from "../assests/sportLoopBands/1.jpg";
import sport_loop_band_2 from "../assests/sportLoopBands/2.jpg";
import sport_loop_band_3 from "../assests/sportLoopBands/3.jpg";
import sport_loop_band_4 from "../assests/sportLoopBands/4.jpg";
import sport_loop_band_5 from "../assests/sportLoopBands/5.jpg";
import sport_loop_band_6 from "../assests/sportLoopBands/6.jpg";
import sport_loop_band_7 from "../assests/sportLoopBands/7.jpg";
import sport_band_1 from "../assests/sportBands/1.jpg";
import sport_band_2 from "../assests/sportBands/2.jpg";
import sport_band_3 from "../assests/sportBands/3.jpg";
import sport_band_4 from "../assests/sportBands/4.jpg";
import sport_band_5 from "../assests/sportBands/5.jpg";
import sport_band_6 from "../assests/sportBands/6.jpg";
import sport_band_7 from "../assests/sportBands/7.jpg";
import sport_band_8 from "../assests/sportBands/8.jpg";
import sport_band_9 from "../assests/sportBands/9.jpg";
import sport_band_10 from "../assests/sportBands/10.jpg";
import fineWoven_band_1 from "../assests/fineWovenBands/1.jpg";
import fineWoven_band_2 from "../assests/fineWovenBands/2.jpg";
import fineWoven_band_3 from "../assests/fineWovenBands/3.jpg";
import braided_solo_loop_band_1 from "../assests/braidedSoloLoopBands/1.jpg";
import braided_solo_loop_band_2 from "../assests/braidedSoloLoopBands/2.jpg";
import braided_solo_loop_band_3 from "../assests/braidedSoloLoopBands/3.jpg";
import braided_solo_loop_band_4 from "../assests/braidedSoloLoopBands/4.jpg";
import braided_solo_loop_band_5 from "../assests/braidedSoloLoopBands/5.jpg";
import braided_solo_loop_band_6 from "../assests/braidedSoloLoopBands/6.jpg";
import braided_solo_loop_band_7 from "../assests/braidedSoloLoopBands/7.jpg";
import solo_loop_band_1 from "../assests/soloLoopBands/1.jpg";
import solo_loop_band_2 from "../assests/soloLoopBands/2.jpg";
import solo_loop_band_3 from "../assests/soloLoopBands/3.jpg";
import solo_loop_band_4 from "../assests/soloLoopBands/4.jpg";
import solo_loop_band_5 from "../assests/soloLoopBands/5.jpg";
import nike_sport_loop_band_1 from "../assests/nikeSportLoopBands/1.jpg";
import nike_sport_loop_band_2 from "../assests/nikeSportLoopBands/2.jpg";
import nike_sport_loop_band_3 from "../assests/nikeSportLoopBands/3.jpg";
import nike_sport_loop_band_4 from "../assests/nikeSportLoopBands/4.jpg";
import nike_sport_loop_band_5 from "../assests/nikeSportLoopBands/5.jpg";
import nike_sport_band_1 from "../assests/nikeSportBands/1.jpg";
import nike_sport_band_2 from "../assests/nikeSportBands/2.jpg";
import nike_sport_band_3 from "../assests/nikeSportBands/3.jpg";
import nike_sport_band_4 from "../assests/nikeSportBands/4.jpg";
import nike_sport_band_5 from "../assests/nikeSportBands/5.jpg";
import nike_sport_band_6 from "../assests/nikeSportBands/6.jpg";
import nike_sport_band_7 from "../assests/nikeSportBands/7.jpg";
import sport_loop_band_6_46mm_watchface from "../assests/sportLoopBands/6_46mm_watchface.png";
import sport_loop_band_7_46mm_watchface from "../assests/sportLoopBands/7_46mm_watchface.png";
import sport_band_8_46mm_watchface from "../assests/sportBands/8_46mm_watchface.png";
import sport_band_9_46mm_watchface from "../assests/sportBands/9_46mm_watchface.png";
import sport_band_10_46mm_watchface from "../assests/sportBands/10_46mm_watchface.png";
import braided_solo_loop_band_6_46mm_watchface from "../assests/braidedSoloLoopBands/6_46mm_watchface.png";
import braided_solo_loop_band_7_46mm_watchface from "../assests/braidedSoloLoopBands/7_46mm_watchface.png";
import nike_sport_loop_band_1_46mm_watchface from "../assests/nikeSportLoopBands/1_46mm_watchface.png";
import nike_sport_loop_band_2_46mm_watchface from "../assests/nikeSportLoopBands/2_46mm_watchface.png";
import nike_sport_loop_band_3_46mm_watchface from "../assests/nikeSportLoopBands/3_46mm_watchface.png";
import nike_sport_loop_band_4_46mm_watchface from "../assests/nikeSportLoopBands/4_46mm_watchface.png";
import nike_sport_loop_band_5_46mm_watchface from "../assests/nikeSportLoopBands/5_46mm_watchface.png";
import nike_sport_bands_1_46mm_watchface from "../assests/nikeSportBands/1_46mm_watchface.png";
import nike_sport_bands_2_46mm_watchface from "../assests/nikeSportBands/2_46mm_watchface.png";
import nike_sport_bands_3_46mm_watchface from "../assests/nikeSportBands/3_46mm_watchface.png";
import nike_sport_bands_4_46mm_watchface from "../assests/nikeSportBands/4_46mm_watchface.png";
import nike_sport_bands_5_46mm_watchface from "../assests/nikeSportBands/5_46mm_watchface.png";
import nike_sport_bands_6_46mm_watchface from "../assests/nikeSportBands/6_46mm_watchface.png";
import nike_sport_bands_7_46mm_watchface from "../assests/nikeSportBands/7_46mm_watchface.png";
import {
  ICaseType,
  ICollectionsType,
  ICustomizeOption,
  ISelectedWatchTypes,
  IWatchSizes,
} from "./interfaces/HomepageInterface";
import {
  ALUMINIUM_TEXT,
  APPLE_WATCH_SE_TEXT,
  APPLE_WATCH_SERIES_10_TEXT,
  BRAIDED_SOLO_LOOP_TEXT,
  FINEWOVEN_TEXT,
  NIKE_SPORT_BAND_TEXT,
  NIKE_SPORT_LOOP_TEXT,
  SOLO_LOOP_TEXT,
  SPORT_BAND_TEXT,
  SPORT_LOOP_TEXT,
  STAINLESS_STEEL_TEXT,
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
    useState(false);
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
  const [selectedWatchCase, setSelectedWatchCase] =
    useState<ICaseType>(ALUMINIUM_TEXT);
  const [selectedWatchBand, setSelectedWatchBand] = useState(SOLO_LOOP_TEXT);
  const [selectedWatchBandName, setSelectedWatchBandName] =
    useState("Black Solo Loop");
  const [selectedWatchBandImageUrl, setSelectedWatchBandImageUrl] = useState(
    HomepageAppleWatchBlackStrap
  );
  const [selectedWatchFaceImageUrl, setSelectedWatchFaceImageUrl] = useState(
    HomepageAppleWatchFace
  );
  const [selectedCollectionTypeBands, setSelectedCollectionsTypeBands] =
    useState<
      {
        bandModel: string;
        imagePath: string;
        bandName: string;
        watchFaceImageUrl: string;
      }[]
    >([]);
  const [selectedWatchSize, setSelectedWatchSize] =
    useState<IWatchSizes>("46mm");
  const [selectedWatchType, setSelectedWatchType] =
    useState<ISelectedWatchTypes>({
      size: selectedWatchSize,
      caseType: selectedWatchCase,
      watchFaceImageUrl: selectedWatchFaceImageUrl,
      watchBandImageUrl: selectedWatchBandImageUrl,
      bandType: selectedWatchBand,
      collectionType: selectedCollectionsType,
      title: `${selectedWatchSize} Jet Black ${selectedWatchCase} Case with ${selectedWatchBandName}`,
      cost: "$429",
    });
  const [centeredIndex, setCenteredIndex] = useState(0); // To store the centered slide index
  const swiperRef = useRef<SwiperType | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    if (
      selectedCollectionsType.typeName === APPLE_WATCH_SERIES_10_TEXT ||
      selectedCollectionsType.typeName === APPLE_WATCH_SE_TEXT
    ) {
      const bands = [
        ...getWatchBandsImagesBasedOnBandText(STAINLESS_STEEL_TEXT),
        ...getWatchBandsImagesBasedOnBandText(SPORT_LOOP_TEXT),
        ...getWatchBandsImagesBasedOnBandText(SPORT_BAND_TEXT),
        ...getWatchBandsImagesBasedOnBandText(FINEWOVEN_TEXT),
        ...getWatchBandsImagesBasedOnBandText(BRAIDED_SOLO_LOOP_TEXT),
        ...getWatchBandsImagesBasedOnBandText(SOLO_LOOP_TEXT),
        ...getWatchBandsImagesBasedOnBandText(NIKE_SPORT_LOOP_TEXT),
        ...getWatchBandsImagesBasedOnBandText(NIKE_SPORT_BAND_TEXT),
      ];
      setSelectedCollectionsTypeBands(
        bands as {
          bandModel: string;
          imagePath: string;
          bandName: string;
          watchFaceImageUrl: string;
        }[]
      );
    }
  }, [selectedCollectionsType]);
  console.log({ selectedCollectionTypeBands });
  useEffect(() => {
    // Set a delay to trigger the initial transition after render
    if (isGetStartedButtonClicked && selectedCustomizeOption) {
      setTimeout(() => {
        setIsInitialLoad(false);
      }, 500); // Delay to allow transition to complete
    }
  }, [isGetStartedButtonClicked, selectedCustomizeOption]);
  useEffect(() => {
    if (isGetStartedButtonClicked) {
      setSelectedWatchType({
        size: selectedWatchSize,
        caseType: selectedWatchCase,
        bandType: selectedWatchBand,
        watchFaceImageUrl: selectedWatchFaceImageUrl,
        watchBandImageUrl: selectedWatchBandImageUrl,
        collectionType: selectedCollectionsType,
        title: `${selectedWatchSize} Jet Black ${selectedWatchCase} Case with ${selectedWatchBandName}`,
        cost: "$429",
      });
    }
  }, [
    isGetStartedButtonClicked,
    selectedWatchSize,
    selectedWatchCase,
    selectedWatchBand,
    selectedCollectionsType,
    selectedWatchBandName,
  ]);
  const getWatchBandsImagesBasedOnBandText = (band: string) => {
    const mapImageWithBand = (
      imagePath: string,
      bandName: string,
      watchFaceImageUrl?: string
    ) => ({
      bandModel: band,
      bandName: bandName,
      imagePath,
      watchFaceImageUrl: watchFaceImageUrl || HomepageAppleWatchFace,
    });

    switch (band) {
      case STAINLESS_STEEL_TEXT:
        return [
          mapImageWithBand(stainless_steel_band_1, "Natural Milanese Loop"),
          mapImageWithBand(stainless_steel_band_2, "Gold Milanese Loop"),
          mapImageWithBand(stainless_steel_band_3, "Slate Milanese Loop"),
          mapImageWithBand(stainless_steel_band_4, "Natural Link Bracelet"),
          mapImageWithBand(stainless_steel_band_5, "Gold Link Bracelet"),
          mapImageWithBand(stainless_steel_band_6, "Slate Link Bracelet"),
        ];
      case SPORT_LOOP_TEXT:
        return [
          mapImageWithBand(sport_loop_band_1, "Ultramarine Sport Loop"),
          mapImageWithBand(sport_loop_band_2, "Lake Green Sport Loop"),
          mapImageWithBand(sport_loop_band_3, "Blue Cloud Sport Loop"),
          mapImageWithBand(sport_loop_band_4, "Ink Sport Loop"),
          mapImageWithBand(sport_loop_band_5, "Plum Sport Loop"),
          mapImageWithBand(
            sport_loop_band_6,
            "Pride Edition Sport Loop",
            sport_loop_band_6_46mm_watchface
          ),
          mapImageWithBand(
            sport_loop_band_7,
            "Black Unity Sport Loop",
            sport_loop_band_7_46mm_watchface
          ),
        ];
      case SPORT_BAND_TEXT:
        return [
          mapImageWithBand(sport_band_1, "Lake Green Sport Band"),
          mapImageWithBand(sport_band_2, "Stone Gray Sport Band"),
          mapImageWithBand(sport_band_3, "Starlight Sport Band"),
          mapImageWithBand(sport_band_4, "Plum Sport Band"),
          mapImageWithBand(sport_band_5, "Black Sport Band"),
          mapImageWithBand(sport_band_6, "Denim Sport Band"),
          mapImageWithBand(sport_band_7, "Light Blush Sport Band"),
          mapImageWithBand(
            sport_band_8,
            "Pride Edition Sport Band",
            sport_band_8_46mm_watchface
          ),
          mapImageWithBand(
            sport_band_9,
            "Black Unity Sport Band - Unity Bloom",
            sport_band_9_46mm_watchface
          ),
          mapImageWithBand(
            sport_band_10,
            "Black Unity Sport Band",
            sport_band_10_46mm_watchface
          ),
        ];
      case FINEWOVEN_TEXT:
        return [
          mapImageWithBand(fineWoven_band_1, "Black Magnetic Link"),
          mapImageWithBand(fineWoven_band_2, "Dark Taupe Magnetic Link"),
          mapImageWithBand(fineWoven_band_3, "Blackberry Magnetic Link"),
        ];
      case BRAIDED_SOLO_LOOP_TEXT:
        return [
          mapImageWithBand(
            braided_solo_loop_band_1,
            "Lake Green Braided Solo Loop"
          ),
          mapImageWithBand(
            braided_solo_loop_band_2,
            "Midnight Braided Solo Loop"
          ),
          mapImageWithBand(braided_solo_loop_band_3, "Denim Braided Solo Loop"),
          mapImageWithBand(
            braided_solo_loop_band_4,
            "Chartreuse Braided Solo Loop"
          ),
          mapImageWithBand(
            braided_solo_loop_band_5,
            "Magenta Braided Solo Loop"
          ),
          mapImageWithBand(
            braided_solo_loop_band_6,
            "Pride Edition Braided Solo Loop",
            braided_solo_loop_band_6_46mm_watchface
          ),
          mapImageWithBand(
            braided_solo_loop_band_7,
            "Black Unity Braided Solo Loop",
            braided_solo_loop_band_7_46mm_watchface
          ),
        ];
      case SOLO_LOOP_TEXT:
        return [
          mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop"),
          mapImageWithBand(solo_loop_band_2, "Ultramarine Solo Loop"),
          mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop"),
          mapImageWithBand(solo_loop_band_4, "Black Solo Loop"),
          mapImageWithBand(solo_loop_band_5, "Blush Solo Loop"),
        ];
      case NIKE_SPORT_LOOP_TEXT:
        return [
          mapImageWithBand(
            nike_sport_loop_band_1,
            "Black/Blue Nike Sport Loop",
            nike_sport_loop_band_1_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_2,
            "Starlight/Pink Nike Sport Loop",
            nike_sport_loop_band_2_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_3,
            "Grey/Blue Nike Sport Loop",
            nike_sport_loop_band_3_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_4,
            "Green/Grey Nike Sport Loop",
            nike_sport_loop_band_4_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_5,
            "Blue/Red Nike Sport Loop",
            nike_sport_loop_band_5_46mm_watchface
          ),
        ];
      case NIKE_SPORT_BAND_TEXT:
        return [
          mapImageWithBand(
            nike_sport_band_1,
            "Volt Splash Nike Sport Band",
            nike_sport_bands_1_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_2,
            "Magic Ember Nike Sport Band",
            nike_sport_bands_2_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_3,
            "Midnight Sky Nike Sport Band",
            nike_sport_bands_3_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_4,
            "Pure Platinum Nike Sport Band",
            nike_sport_bands_4_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_5,
            "Desert Stone Nike Sport Band",
            nike_sport_bands_5_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_6,
            "Cargo Khaki Nike Sport Band",
            nike_sport_bands_6_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_7,
            "Blue Flame Nike Sport Band",
            nike_sport_bands_7_46mm_watchface
          ),
        ];
      default:
        return [
          mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop"),
          mapImageWithBand(solo_loop_band_2, "Ultramarine Solo Loop"),
          mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop"),
          mapImageWithBand(solo_loop_band_4, "Black Solo Loop"),
          mapImageWithBand(solo_loop_band_5, "Blush Solo Loop"),
        ];
    }
  };
  return (
    <Box className={HomePageStyles.HomePageContainerCSS}>
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
          width: "100vw",
        }}
      >
        {isGetStartedButtonClicked && selectedCustomizeOption && (
          <Box>
            <div className={HomePageStyles.custom_prev_button}>
              <LeftIcon style={{ height: 36, width: 36 }} />
            </div>
            <div className={HomePageStyles.custom_next_button}>
              <RightIcon style={{ height: 36, width: 36 }} />
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView="auto"
              initialSlide={3}
              navigation={{
                prevEl: `.${HomePageStyles.custom_prev_button}`,
                nextEl: `.${HomePageStyles.custom_next_button}`,
              }}
              centeredSlides={true}
              simulateTouch={true} // Enables swipe gestures
              // touchStartPreventDefault={false} // Allow default touchpad scrolling behavior
              // scrollbar={{ draggable: true }}
              mousewheel={{
                forceToAxis: true, // Restricts scrolling to one axis
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                const centeredBand =
                  selectedCollectionTypeBands[swiper.activeIndex];
                setSelectedWatchBand(centeredBand.bandModel); // Set the centered band
                setSelectedWatchBandName(centeredBand.bandName);
                setSelectedWatchBandImageUrl(centeredBand.imagePath);
                setSelectedWatchFaceImageUrl(centeredBand.watchFaceImageUrl);
                setCenteredIndex(swiper.activeIndex); // Update centered slide index
              }}
              style={{
                position: "relative",
                zIndex: 1,
                height: "56vh",
                paddingRight: "87px",
              }}
              className={`${HomePageStyles.swiper_container} ${
                isInitialLoad ? `${HomePageStyles.initial_loaded}` : ""
              }`}
            >
              {selectedCollectionTypeBands?.map((item) => (
                <SwiperSlide key={item.imagePath} style={{ width: "312px" }}>
                  <img
                    src={item.imagePath}
                    alt="Apple Watch Strap"
                    className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
        <Box
          className={`${HomePageStyles.landingPageAppleWatchContainer} ${
            isGetStartedButtonClicked
              ? HomePageStyles.landingPageAppleWatchContainerWhenGetStartedClicked
              : ""
          } ${
            selectedCustomizeOption
              ? HomePageStyles.landinPageAppleWatchContainerWhenCarosalOn
              : ""
          }`}
        >
          {!selectedCustomizeOption && (
            <img
              src={selectedWatchBandImageUrl}
              alt="Apple Watch black Strap"
              className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
            />
          )}
          <img
            src={selectedWatchFaceImageUrl}
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
  );
};

export default HomePage;
