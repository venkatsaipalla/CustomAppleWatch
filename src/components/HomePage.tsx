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
import commonWatchFace_1_46mm from "../assests/commonWatchFaces/1.png";
import commonWatchFace_2_46mm from "../assests/commonWatchFaces/2.png";
import commonWatchFace_3_46mm from "../assests/commonWatchFaces/3.png";
import commonWatchFace_4_46mm from "../assests/commonWatchFaces/4.png";
import commonWatchFace_5_46mm from "../assests/commonWatchFaces/5.png";
import commonWatchFace_6_46mm from "../assests/commonWatchFaces/6.png";
import nikeSportLoopBand_1_2nd_46mm_watchFace from "../assests/nikeSportLoopBands/1_watch_faces/2_46_mm_wactchface.png";
import nikeSportLoopBand_1_3rd_46mm_watchFace from "../assests/nikeSportLoopBands/1_watch_faces/3_46_mm_wactchface.png";
import nikeSportLoopBand_1_4th_46mm_watchFace from "../assests/nikeSportLoopBands/1_watch_faces/4_46_mm_wactchface.png";
import nikeSportLoopBand_1_5th_46mm_watchFace from "../assests/nikeSportLoopBands/1_watch_faces/5_46_mm_wactchface.png";
import nikeSportLoopBand_1_6th_46mm_watchFace from "../assests/nikeSportLoopBands/1_watch_faces/6_46_mm_wactchface.png";

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
  BAND_TEXT,
  BRAIDED_SOLO_LOOP_TEXT,
  CASE_TEXT,
  FINEWOVEN_TEXT,
  NIKE_SPORT_BAND_TEXT,
  NIKE_SPORT_LOOP_TEXT,
  SIZE_TEXT,
  SOLO_LOOP_TEXT,
  SPORT_BAND_TEXT,
  SPORT_LOOP_TEXT,
  STAINLESS_STEEL_TEXT,
  TITANIUM_TEXT,
} from "../commonConstants/constants";
import SelectedWatchInformation from "./SelectedWatchInformation";
import AppleWatchCustomizeOptions from "./AppleWatchCustomizeOptions";
import useDeviceSize from "../hooks/useDeviceSize";

const useStyles = makeStyles(
  (theme: {
    palette: { text: { primary: any; secondary: any } };
    spacing: (arg0: number) => any;
  }) => ({})
);
const HomePage = () => {
  const classes = useStyles();
  const deviceSize = useDeviceSize();
  // useEffect(() => {
  //   document.title = "Venkat Apple Watch Studio";
  // }, []);
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
  const [selectedWatchBandName, setSelectedWatchBandName] = useState({
    name: "Black Solo Loop",
    id: "MYA33AM",
  });
  const [selectedWatchFaceName, setSelectedWatchFaceName] = useState({
    name: "Jet Black",
    id: "MWX13LW",
  });
  console.log({ selectedWatchBandName, selectedWatchFaceName });
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
        id: string;
      }[]
    >([]);
  const [
    selectedCollectionTypeWatchFaces,
    setSelectedCollectionsTypeWatchFaces,
  ] = useState<
    {
      watchFaceCaseModel: string;
      imagePath: string;
      watchFaceName: string;
      id: string;
      watchFaceImageUrl?: string;
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
      title: `${selectedWatchSize} ${selectedWatchFaceName.name} ${selectedWatchCase} Case with ${selectedWatchBandName.name}`,
      cost: "$429",
    });
  console.log({ selectedWatchType });
  const [centeredIndex, setCenteredIndex] = useState(0); // To store the centered slide index
  const swiperRef = useRef<SwiperType | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  console.log({ selectedCollectionTypeWatchFaces });
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
      const watchFaces = [
        ...getWatchFacesImagesBasedonSelectedBand(selectedWatchBand),
      ];
      setSelectedCollectionsTypeBands(
        bands as {
          bandModel: string;
          imagePath: string;
          bandName: string;
          id: string;
          watchFaceImageUrl: string;
        }[]
      );
      setSelectedCollectionsTypeWatchFaces(watchFaces);
    }
  }, [selectedCollectionsType, selectedWatchBand]);
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
        title: `${selectedWatchSize} ${selectedWatchFaceName.name} ${selectedWatchCase} Case with ${selectedWatchBandName.name}`,
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
    selectedWatchFaceName,
  ]);
  const getWatchBandsImagesBasedOnBandText = (band: string) => {
    const mapImageWithBand = (
      imagePath: string,
      bandName: string,
      id: string,
      watchFaceImageUrl?: string
    ) => ({
      bandModel: band,
      bandName: bandName,
      imagePath,
      id,
      watchFaceImageUrl: watchFaceImageUrl || HomepageAppleWatchFace,
    });

    switch (band) {
      case STAINLESS_STEEL_TEXT:
        return [
          mapImageWithBand(
            stainless_steel_band_1,
            "Natural Milanese Loop",
            "MC7J4AM"
          ),
          mapImageWithBand(
            stainless_steel_band_2,
            "Gold Milanese Loop",
            "MC7K4AM"
          ),
          mapImageWithBand(
            stainless_steel_band_3,
            "Slate Milanese Loop",
            "MC7L4AM"
          ),
          mapImageWithBand(
            stainless_steel_band_4,
            "Natural Link Bracelet",
            "MXMF3AM"
          ),
          mapImageWithBand(
            stainless_steel_band_5,
            "Gold Link Bracelet",
            "MXMH3AM"
          ),
          mapImageWithBand(
            stainless_steel_band_6,
            "Slate Link Bracelet",
            "MXMK3AM"
          ),
        ];
      case SPORT_LOOP_TEXT:
        return [
          mapImageWithBand(
            sport_loop_band_1,
            "Ultramarine Sport Loop",
            "MXL73AM"
          ),
          mapImageWithBand(
            sport_loop_band_2,
            "Lake Green Sport Loop",
            "MXL83AM"
          ),
          mapImageWithBand(
            sport_loop_band_3,
            "Blue Cloud Sport Loop",
            "MXL53AM"
          ),
          mapImageWithBand(sport_loop_band_4, "Ink Sport Loop", "MXL33AM"),
          mapImageWithBand(sport_loop_band_5, "Plum Sport Loop", "MXL63AM"),
          mapImageWithBand(
            sport_loop_band_6,
            "Pride Edition Sport Loop",
            "MN6L3AM",
            sport_loop_band_6_46mm_watchface
          ),
          mapImageWithBand(
            sport_loop_band_7,
            "Black Unity Sport Loop",
            "MQTJ3AM",
            sport_loop_band_7_46mm_watchface
          ),
        ];
      case SPORT_BAND_TEXT:
        return [
          mapImageWithBand(sport_band_1, "Lake Green Sport Band", "MXLQ3AM"),
          mapImageWithBand(sport_band_2, "Stone Gray Sport Band", "MXLX3AM"),
          mapImageWithBand(sport_band_3, "Starlight Sport Band", "MXM63AM"),
          mapImageWithBand(sport_band_4, "Plum Sport Band", "MXLT3AM"),
          mapImageWithBand(sport_band_5, "Black Sport Band", "MXM23AM"),
          mapImageWithBand(sport_band_6, "Denim Sport Band", "MXLV3AM"),
          mapImageWithBand(sport_band_7, "Light Blush Sport Band", "MXM83AM"),
          mapImageWithBand(
            sport_band_8,
            "Pride Edition Sport Band",
            "MRTN3AM",
            sport_band_8_46mm_watchface
          ),
          mapImageWithBand(
            sport_band_9,
            "Black Unity Sport Band - Unity Bloom",
            "MYGW3AM",
            sport_band_9_46mm_watchface
          ),
          mapImageWithBand(
            sport_band_10,
            "Black Unity Sport Band",
            "MJ4W3AM",
            sport_band_10_46mm_watchface
          ),
        ];
      case FINEWOVEN_TEXT:
        return [
          mapImageWithBand(fineWoven_band_1, "Black Magnetic Link", "MXWY3AM"),
          mapImageWithBand(
            fineWoven_band_2,
            "Dark Taupe Magnetic Link",
            "MXWW3AM"
          ),
          mapImageWithBand(
            fineWoven_band_3,
            "Blackberry Magnetic Link",
            "MXWT3AM"
          ),
        ];
      case BRAIDED_SOLO_LOOP_TEXT:
        return [
          mapImageWithBand(
            braided_solo_loop_band_1,
            "Lake Green Braided Solo Loop",
            "MY373AM"
          ),
          mapImageWithBand(
            braided_solo_loop_band_2,
            "Midnight Braided Solo Loop",
            "MY2P3AM"
          ),
          mapImageWithBand(
            braided_solo_loop_band_3,
            "Denim Braided Solo Loop",
            "MY223AM"
          ),
          mapImageWithBand(
            braided_solo_loop_band_4,
            "Chartreuse Braided Solo Loop",
            "MY3W3AM"
          ),
          mapImageWithBand(
            braided_solo_loop_band_5,
            "Magenta Braided Solo Loop",
            "MY4E3AM"
          ),
          mapImageWithBand(
            braided_solo_loop_band_6,
            "Pride Edition Braided Solo Loop",
            "MYGD3AM",
            braided_solo_loop_band_6_46mm_watchface
          ),
          mapImageWithBand(
            braided_solo_loop_band_7,
            "Black Unity Braided Solo Loop",
            "MMWK3AM",
            braided_solo_loop_band_7_46mm_watchface
          ),
        ];
      case SOLO_LOOP_TEXT:
        return [
          mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop", "MY803AM"),
          mapImageWithBand(
            solo_loop_band_2,
            "Ultramarine Solo Loop",
            "MY8E3AM"
          ),
          mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop", "MY8U3AM"),
          mapImageWithBand(solo_loop_band_4, "Black Solo Loop", "MYA33AM"),
          mapImageWithBand(solo_loop_band_5, "Blush Solo Loop", "MY9N3AM"),
        ];
      case NIKE_SPORT_LOOP_TEXT:
        return [
          mapImageWithBand(
            nike_sport_loop_band_1,
            "Black/Blue Nike Sport Loop",
            "MYJD3AM",
            nike_sport_loop_band_1_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_2,
            "Starlight/Pink Nike Sport Loop",
            "MYJE3AM",
            nike_sport_loop_band_2_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_3,
            "Grey/Blue Nike Sport Loop",
            "MXU13AM",
            nike_sport_loop_band_3_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_4,
            "Green/Grey Nike Sport Loop",
            "MXU33AM",
            nike_sport_loop_band_4_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_loop_band_5,
            "Blue/Red Nike Sport Loop",
            "MXU43AM",
            nike_sport_loop_band_5_46mm_watchface
          ),
        ];
      case NIKE_SPORT_BAND_TEXT:
        return [
          mapImageWithBand(
            nike_sport_band_1,
            "Volt Splash Nike Sport Band",
            "MXU73AM",
            nike_sport_bands_1_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_2,
            "Magic Ember Nike Sport Band",
            "MYLF3AM",
            nike_sport_bands_2_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_3,
            "Midnight Sky Nike Sport Band",
            "MYL63AM",
            nike_sport_bands_3_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_4,
            "Pure Platinum Nike Sport Band",
            "MYL43AM",
            nike_sport_bands_4_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_5,
            "Desert Stone Nike Sport Band",
            "MYL83AM",
            nike_sport_bands_5_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_6,
            "Cargo Khaki Nike Sport Band",
            "MYLD3AM",
            nike_sport_bands_6_46mm_watchface
          ),
          mapImageWithBand(
            nike_sport_band_7,
            "Blue Flame Nike Sport Band",
            "MYLA3AM",
            nike_sport_bands_7_46mm_watchface
          ),
        ];
      default:
        return [
          mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop", "MY803AM"),
          mapImageWithBand(
            solo_loop_band_2,
            "Ultramarine Solo Loop",
            "MY8E3AM"
          ),
          mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop", "MY8U3AM"),
          mapImageWithBand(solo_loop_band_4, "Black Solo Loop", "MYA33AM"),
          mapImageWithBand(solo_loop_band_5, "Blush Solo Loop", "MY9N3AM"),
        ];
    }
  };
  const getWatchFacesImagesBasedonSelectedBand = (band: string) => {
    const mapImageWithWatchFace = (
      imagePath: string,
      watchFaceName: string,
      id: string,
      watchFaceCaseModel: string,
      watchFaceImageUrl?: string
    ) => ({
      imagePath,
      watchFaceName,
      id,
      watchFaceCaseModel,
      watchFaceImageUrl,
    });

    switch (band) {
      case STAINLESS_STEEL_TEXT:
      case SPORT_LOOP_TEXT:
      case SPORT_BAND_TEXT:
      case FINEWOVEN_TEXT:
      case BRAIDED_SOLO_LOOP_TEXT:
      case SOLO_LOOP_TEXT:
        return [
          mapImageWithWatchFace(
            commonWatchFace_1_46mm,
            "Silver",
            "MWX03LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_2_46mm,
            "Rose Gold",
            "MWX23LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_3_46mm,
            "Jet Black",
            "MWX13LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_4_46mm,
            "Natural",
            "MX163LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_5_46mm,
            "Gold",
            "MX183LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_6_46mm,
            "Slate",
            "MX173LW",
            TITANIUM_TEXT
          ),
        ];

      case NIKE_SPORT_LOOP_TEXT:
        return [
          mapImageWithWatchFace(
            nike_sport_loop_band_1_46mm_watchface,
            "Silver",
            "MWX03LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            nikeSportLoopBand_1_2nd_46mm_watchFace,
            "Rose Gold",
            "MWX23LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            nikeSportLoopBand_1_3rd_46mm_watchFace,
            "Jet Black",
            "MWX13LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            nikeSportLoopBand_1_4th_46mm_watchFace,
            "Natural",
            "MX163LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            nikeSportLoopBand_1_5th_46mm_watchFace,
            "Gold",
            "MX183LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            nikeSportLoopBand_1_6th_46mm_watchFace,
            "Slate",
            "MX173LW",
            TITANIUM_TEXT
          ),
        ];
      case NIKE_SPORT_BAND_TEXT:
        return [
          mapImageWithWatchFace(
            commonWatchFace_1_46mm,
            "Silver",
            "MWX03LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_2_46mm,
            "Rose Gold",
            "MWX23LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_3_46mm,
            "Jet Black",
            "MWX13LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_4_46mm,
            "Natural",
            "MX163LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_5_46mm,
            "Gold",
            "MX183LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_6_46mm,
            "Slate",
            "MX173LW",
            TITANIUM_TEXT
          ),
        ];
      default:
        return [
          mapImageWithWatchFace(
            commonWatchFace_1_46mm,
            "Silver",
            "MWX03LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_2_46mm,
            "Rose Gold",
            "MWX23LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_3_46mm,
            "Jet Black",
            "MWX13LW",
            ALUMINIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_4_46mm,
            "Natural",
            "MX163LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_5_46mm,
            "Gold",
            "MX183LW",
            TITANIUM_TEXT
          ),
          mapImageWithWatchFace(
            commonWatchFace_6_46mm,
            "Slate",
            "MX173LW",
            TITANIUM_TEXT
          ),
        ];
    }
  };
  const getWatchSizeVariantsBasedonSelectedBandAndCase = (
    band: string,
    caseType: string
  ) => {
    const mapImageWithBandAndCase = (
      imagePath: string,
      imagePath2: string,
      bandId: string,
      caseId: string
    ) => ({
      imagePath,
      imagePath2,
      bandId,
      caseId,
    });
    const combinedKey = `${band}_${caseType}`;
    // switch (combinedKey) {
    //   case `${STAINLESS_STEEL_TEXT}_${ALUMINIUM_TEXT}`:
    //     return [
    //       mapImageWithBand(
    //         stainless_steel_band_1,
    //         "Natural Milanese Loop",
    //         "MC7J4AM"
    //       ),
    //       mapImageWithBand(
    //         stainless_steel_band_2,
    //         "Gold Milanese Loop",
    //         "MC7K4AM"
    //       ),
    //       mapImageWithBand(
    //         stainless_steel_band_3,
    //         "Slate Milanese Loop",
    //         "MC7L4AM"
    //       ),
    //       mapImageWithBand(
    //         stainless_steel_band_4,
    //         "Natural Link Bracelet",
    //         "MXMF3AM"
    //       ),
    //       mapImageWithBand(
    //         stainless_steel_band_5,
    //         "Gold Link Bracelet",
    //         "MXMH3AM"
    //       ),
    //       mapImageWithBand(
    //         stainless_steel_band_6,
    //         "Slate Link Bracelet",
    //         "MXMK3AM"
    //       ),
    //     ];
    //   case SPORT_LOOP_TEXT:
    //     return [
    //       mapImageWithBand(
    //         sport_loop_band_1,
    //         "Ultramarine Sport Loop",
    //         "MXL73AM"
    //       ),
    //       mapImageWithBand(
    //         sport_loop_band_2,
    //         "Lake Green Sport Loop",
    //         "MXL83AM"
    //       ),
    //       mapImageWithBand(
    //         sport_loop_band_3,
    //         "Blue Cloud Sport Loop",
    //         "MXL53AM"
    //       ),
    //       mapImageWithBand(sport_loop_band_4, "Ink Sport Loop", "MXL33AM"),
    //       mapImageWithBand(sport_loop_band_5, "Plum Sport Loop", "MXL63AM"),
    //       mapImageWithBand(
    //         sport_loop_band_6,
    //         "Pride Edition Sport Loop",
    //         "MN6L3AM",
    //         sport_loop_band_6_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         sport_loop_band_7,
    //         "Black Unity Sport Loop",
    //         "MQTJ3AM",
    //         sport_loop_band_7_46mm_watchface
    //       ),
    //     ];
    //   case SPORT_BAND_TEXT:
    //     return [
    //       mapImageWithBand(sport_band_1, "Lake Green Sport Band", "MXLQ3AM"),
    //       mapImageWithBand(sport_band_2, "Stone Gray Sport Band", "MXLX3AM"),
    //       mapImageWithBand(sport_band_3, "Starlight Sport Band", "MXM63AM"),
    //       mapImageWithBand(sport_band_4, "Plum Sport Band", "MXLT3AM"),
    //       mapImageWithBand(sport_band_5, "Black Sport Band", "MXM23AM"),
    //       mapImageWithBand(sport_band_6, "Denim Sport Band", "MXLV3AM"),
    //       mapImageWithBand(sport_band_7, "Light Blush Sport Band", "MXM83AM"),
    //       mapImageWithBand(
    //         sport_band_8,
    //         "Pride Edition Sport Band",
    //         "MRTN3AM",
    //         sport_band_8_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         sport_band_9,
    //         "Black Unity Sport Band - Unity Bloom",
    //         "MYGW3AM",
    //         sport_band_9_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         sport_band_10,
    //         "Black Unity Sport Band",
    //         "MJ4W3AM",
    //         sport_band_10_46mm_watchface
    //       ),
    //     ];
    //   case FINEWOVEN_TEXT:
    //     return [
    //       mapImageWithBand(fineWoven_band_1, "Black Magnetic Link", "MXWY3AM"),
    //       mapImageWithBand(
    //         fineWoven_band_2,
    //         "Dark Taupe Magnetic Link",
    //         "MXWW3AM"
    //       ),
    //       mapImageWithBand(
    //         fineWoven_band_3,
    //         "Blackberry Magnetic Link",
    //         "MXWT3AM"
    //       ),
    //     ];
    //   case BRAIDED_SOLO_LOOP_TEXT:
    //     return [
    //       mapImageWithBand(
    //         braided_solo_loop_band_1,
    //         "Lake Green Braided Solo Loop",
    //         "MY373AM"
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_2,
    //         "Midnight Braided Solo Loop",
    //         "MY2P3AM"
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_3,
    //         "Denim Braided Solo Loop",
    //         "MY223AM"
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_4,
    //         "Chartreuse Braided Solo Loop",
    //         "MY3W3AM"
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_5,
    //         "Magenta Braided Solo Loop",
    //         "MY4E3AM"
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_6,
    //         "Pride Edition Braided Solo Loop",
    //         "MYGD3AM",
    //         braided_solo_loop_band_6_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         braided_solo_loop_band_7,
    //         "Black Unity Braided Solo Loop",
    //         "MMWK3AM",
    //         braided_solo_loop_band_7_46mm_watchface
    //       ),
    //     ];
    //   case SOLO_LOOP_TEXT:
    //     return [
    //       mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop", "MY803AM"),
    //       mapImageWithBand(
    //         solo_loop_band_2,
    //         "Ultramarine Solo Loop",
    //         "MY8E3AM"
    //       ),
    //       mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop", "MY8U3AM"),
    //       mapImageWithBand(solo_loop_band_4, "Black Solo Loop", "MYA33AM"),
    //       mapImageWithBand(solo_loop_band_5, "Blush Solo Loop", "MY9N3AM"),
    //     ];
    //   case NIKE_SPORT_LOOP_TEXT:
    //     return [
    //       mapImageWithBand(
    //         nike_sport_loop_band_1,
    //         "Black/Blue Nike Sport Loop",
    //         "MYJD3AM",
    //         nike_sport_loop_band_1_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_loop_band_2,
    //         "Starlight/Pink Nike Sport Loop",
    //         "MYJE3AM",
    //         nike_sport_loop_band_2_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_loop_band_3,
    //         "Grey/Blue Nike Sport Loop",
    //         "MXU13AM",
    //         nike_sport_loop_band_3_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_loop_band_4,
    //         "Green/Grey Nike Sport Loop",
    //         "MXU33AM",
    //         nike_sport_loop_band_4_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_loop_band_5,
    //         "Blue/Red Nike Sport Loop",
    //         "MXU43AM",
    //         nike_sport_loop_band_5_46mm_watchface
    //       ),
    //     ];
    //   case NIKE_SPORT_BAND_TEXT:
    //     return [
    //       mapImageWithBand(
    //         nike_sport_band_1,
    //         "Volt Splash Nike Sport Band",
    //         "MXU73AM",
    //         nike_sport_bands_1_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_2,
    //         "Magic Ember Nike Sport Band",
    //         "MYLF3AM",
    //         nike_sport_bands_2_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_3,
    //         "Midnight Sky Nike Sport Band",
    //         "MYL63AM",
    //         nike_sport_bands_3_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_4,
    //         "Pure Platinum Nike Sport Band",
    //         "MYL43AM",
    //         nike_sport_bands_4_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_5,
    //         "Desert Stone Nike Sport Band",
    //         "MYL83AM",
    //         nike_sport_bands_5_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_6,
    //         "Cargo Khaki Nike Sport Band",
    //         "MYLD3AM",
    //         nike_sport_bands_6_46mm_watchface
    //       ),
    //       mapImageWithBand(
    //         nike_sport_band_7,
    //         "Blue Flame Nike Sport Band",
    //         "MYLA3AM",
    //         nike_sport_bands_7_46mm_watchface
    //       ),
    //     ];
    //   default:
    //     return [
    //       mapImageWithBand(solo_loop_band_1, "Star Fruit Solo Loop", "MY803AM"),
    //       mapImageWithBand(
    //         solo_loop_band_2,
    //         "Ultramarine Solo Loop",
    //         "MY8E3AM"
    //       ),
    //       mapImageWithBand(solo_loop_band_3, "Lake Green Solo Loop", "MY8U3AM"),
    //       mapImageWithBand(solo_loop_band_4, "Black Solo Loop", "MYA33AM"),
    //       mapImageWithBand(solo_loop_band_5, "Blush Solo Loop", "MY9N3AM"),
    //     ];
    // }
  };
  // const getInitialSlideIndex = (selectedBand: string) => {
  //   const index = selectedCollectionTypeBands.findIndex(
  //     (band) => band.bandModel === selectedBand
  //   );
  //   return index !== -1 ? index : 0; // Default to 0 if not found
  // };
  const getInitialSlideIndex = (
    selectedModel: string,
    collection: {
      bandModel?: string;
      watchFaceModel?: string;
      watchFaceCaseModel?: string;
    }[]
  ) => {
    const index = collection.findIndex(
      (item) =>
        item.bandModel === selectedModel ||
        item.watchFaceModel === selectedModel ||
        item.watchFaceCaseModel === selectedModel
    );
    return index !== -1 ? index : 0; // Default to 0 if not found
  };
  const onClickofBandText = (band: string) => {
    if (swiperRef.current) {
      const newIndex = getInitialSlideIndex(band, selectedCollectionTypeBands);
      swiperRef.current.slideTo(newIndex);
    }
  };
  const onClickofSizesText = (size : IWatchSizes)=>{
    if (swiperRef.current) {
      if(size=="42mm"){
        swiperRef.current.slideTo(0);
      }
      else{
        swiperRef.current.slideTo(1);
      }
    }
  }
  console.log({ selectedWatchBand });
  useEffect(() => {
    if (selectedCustomizeOption === BAND_TEXT && swiperRef.current) {
      const newIndex = getInitialSlideIndex(
        selectedWatchBand,
        selectedCollectionTypeBands
      );
      swiperRef.current.slideTo(newIndex); // Programmatically move to the new index
    }
  }, [selectedCustomizeOption]);
  useEffect(() => {
    if (selectedCustomizeOption === CASE_TEXT && swiperRef.current) {
      const newIndex = getInitialSlideIndex(
        selectedWatchCase,
        selectedCollectionTypeWatchFaces
      );
      swiperRef.current.slideTo(newIndex); // Programmatically move to the new index
    }
  }, [selectedWatchCase, selectedCustomizeOption]);

  const handleSlideChange = (swiper: SwiperType) => {
    setShowLeftArrow(!swiper.isBeginning); // Show/hide the left arrow
    setShowRightArrow(!swiper.isEnd); // Show/hide the right arrow
  };
  return (
    <Box className={HomePageStyles.HomePageContainerCSS}>
      <Header
        isGetStartedButtonClicked={isGetStartedButtonClicked}
        handleCollectionTypeChange={handleCollectionTypeChange}
        selectedCollectionsType={selectedCollectionsType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedWatchBandName={selectedWatchBandName}
        selectedWatchFaceName={selectedWatchFaceName}
      />
      <Box
        display="flex"
        // flexDirection="column"
        justifyContent="center"
        // alignItems="center"
        style={{
          position: "relative",
          // top: isGetStartedButtonClicked ? "" : "6vh",
          zIndex: 1,
          margin: "0 auto",
          width: "100vw",
        }}
        className={`${HomePageStyles.mainContainer} ${
          !isGetStartedButtonClicked
            ? `${HomePageStyles.mainContainerWhenGetStarttedButtonNotClicked}`
            : ""
        }`}
      >
        {isGetStartedButtonClicked && selectedCustomizeOption && (
          <Box>
            {showLeftArrow && (
              <div className={HomePageStyles.custom_prev_button}>
                <LeftIcon style={{ height: 36, width: 36 }} />
              </div>
            )}
            {showRightArrow && (
              <div className={HomePageStyles.custom_next_button}>
                <RightIcon style={{ height: 36, width: 36 }} />
              </div>
            )}
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView="auto"
              initialSlide={
                selectedCustomizeOption === BAND_TEXT
                  ? getInitialSlideIndex(
                      selectedWatchBand,
                      selectedCollectionTypeBands
                    )
                  : selectedCustomizeOption === CASE_TEXT
                  ? getInitialSlideIndex(
                      selectedWatchCase,
                      selectedCollectionTypeWatchFaces
                    )
                  : selectedCustomizeOption === SIZE_TEXT
                  ? selectedWatchSize === "42mm"
                    ? 0
                    : 1
                  : 0
              }
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
                if (selectedCustomizeOption === BAND_TEXT) {
                  const centeredBand =
                    selectedCollectionTypeBands[swiper.activeIndex];
                  setSelectedWatchBand(centeredBand.bandModel);
                  setSelectedWatchBandName({
                    name: centeredBand.bandName,
                    id: centeredBand.id,
                  });
                  setSelectedWatchBandImageUrl(centeredBand.imagePath);
                  setSelectedWatchFaceImageUrl(centeredBand.watchFaceImageUrl);
                } else if (selectedCustomizeOption === CASE_TEXT) {
                  const centeredCase =
                    selectedCollectionTypeWatchFaces[swiper.activeIndex];
                  setSelectedWatchCase(
                    centeredCase.watchFaceCaseModel as ICaseType
                  );
                  setSelectedWatchFaceName({
                    name: centeredCase.watchFaceName,
                    id: centeredCase.id,
                  });
                  setSelectedWatchFaceImageUrl(centeredCase.imagePath);
                } else if (selectedCustomizeOption === SIZE_TEXT) {
                  const centeredSlide = swiper.activeIndex;
                  if (centeredSlide == 0) {
                    setSelectedWatchSize("42mm");
                  } else {
                    setSelectedWatchSize("46mm");
                  }
                }
                setCenteredIndex(swiper.activeIndex); // Update centered slide index
                // setShowLeftArrow(!swiper.isBeginning); // Show/hide the left arrow
                // setShowRightArrow(!swiper.isEnd); // Show/hide the right arrow
              }}
              style={{
                position: "relative",
                zIndex: selectedCustomizeOption === BAND_TEXT ? 1 : 3,
                width: "100vw",
              }}
              className={`${HomePageStyles.swiper_container} ${
                isInitialLoad ? `${HomePageStyles.initial_loaded}` : ""
              }`}
            >
              {(selectedCustomizeOption === BAND_TEXT
                ? selectedCollectionTypeBands
                : selectedCustomizeOption === CASE_TEXT
                ? selectedCollectionTypeWatchFaces
                : []
              )?.map((item) => (
                <SwiperSlide
                  key={item.imagePath}
                  className={HomePageStyles.swiper_slide}
                >
                  <img
                    src={item.imagePath}
                    alt={
                      selectedCustomizeOption === BAND_TEXT
                        ? "Apple Watch Strap"
                        : "Apple Watch Case"
                    }
                    className={`${HomePageStyles.landingPageAppleWatch} ${
                      selectedCustomizeOption === BAND_TEXT
                        ? HomePageStyles.landingPageAppleWatchBlackBeltStap
                        : HomePageStyles.landingPageAppleWatchCase
                    }`}
                    // className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                  />
                </SwiperSlide>
              ))}
              {selectedCustomizeOption == SIZE_TEXT && (
                <>
                  <SwiperSlide
                    key={1}
                    className={HomePageStyles.swiper_slide}
                    style={{ position: "relative", transform: "scale(0.9)" }}
                  >
                    <img
                      src={selectedWatchFaceImageUrl}
                      alt={"Apple Watch Case"}
                      className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchCase}`}
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        zIndex: 2,
                      }}
                      // className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                    />
                    <img
                      src={selectedWatchBandImageUrl}
                      alt={"Apple Watch Strap"}
                      className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        zIndex: 1,
                      }}
                      // className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    key={2}
                    className={HomePageStyles.swiper_slide}
                    style={{ position: "relative" }}
                  >
                    <img
                      src={selectedWatchFaceImageUrl}
                      alt={"Apple Watch Case"}
                      className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchCase}`}
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        zIndex: 2,
                      }}
                      // className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                    />
                    <img
                      src={selectedWatchBandImageUrl}
                      alt={"Apple Watch Strap"}
                      className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        zIndex: 1,
                      }}
                      // className={`${HomePageStyles.landingPageAppleWatch} ${HomePageStyles.landingPageAppleWatchBlackBeltStap}`}
                    />
                  </SwiperSlide>
                </>
              )}
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
          {selectedCustomizeOption !== BAND_TEXT &&
            selectedCustomizeOption !== SIZE_TEXT && (
              <img
                src={selectedWatchBandImageUrl}
                alt="Apple Watch black Strap"
                className={`${HomePageStyles.landingPageAppleWatch} ${
                  HomePageStyles.landingPageAppleWatchBlackBeltStap
                } ${
                  isGetStartedButtonClicked
                    ? HomePageStyles.landingPageAppleWatchContainerWhenGetStartedClicked
                    : ""
                } `}
              />
            )}
          {selectedCustomizeOption !== CASE_TEXT &&
            selectedCustomizeOption !== SIZE_TEXT && (
              <img
                src={selectedWatchFaceImageUrl}
                alt="Apple Watch face"
                className={`${HomePageStyles.landingPageAppleWatch} ${
                  HomePageStyles.landingPageAppleWatchFace
                } ${
                  isGetStartedButtonClicked
                    ? HomePageStyles.landingPageAppleWatchContainerWhenGetStartedClicked
                    : ""
                } `}
              />
            )}
        </Box>
      </Box>
      {!isGetStartedButtonClicked && (
        <Box className={HomePageStyles.headlineContainer}>
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
          onClickofBandText={onClickofBandText}
          onClickofSizesText={onClickofSizesText}
        />
      )}
    </Box>
  );
};

export default HomePage;
