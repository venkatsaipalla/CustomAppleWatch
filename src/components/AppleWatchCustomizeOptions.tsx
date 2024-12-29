import { Box, Chip, Typography } from "@mui/material";
import {
  ICaseType,
  ICustomizeOption,
  IWatchSizes,
} from "./interfaces/HomepageInterface";
import { ReactComponent as SizeButtonIcon } from "../assests/svg/appleWatchSize.svg";
import { ReactComponent as CaseButtonIcon } from "../assests/svg/caseIcon.svg";
import { ReactComponent as BandButtonIcon } from "../assests/svg/bandOptionIcon.svg";
import HomepageCss from "./Homepage.module.css";
import {
  APPLE_WATCH_BANDS_LIST,
  APPLE_WATCH_CASES_LIST,
  APPLE_WATCH_SIZES_LIST,
  BAND_TEXT,
  CASE_TEXT,
  SIZE_TEXT,
} from "../commonConstants/constants";
import { useEffect, useRef, useState } from "react";
interface IappleWatchCustomizeOptions {
  setSelectedCustomizeOption: (value: ICustomizeOption) => void;
  selectedCustomizeOption: ICustomizeOption;
  setSelectedWatchCase: (value: ICaseType) => void;
  selectedWatchCase: string;
  setSelectedWatchBand: (value: string) => void;
  selectedWatchBand: string;
  setSelectedWatchSize: (value: IWatchSizes) => void;
  selectedWatchSize: string;
}
const AppleWatchCustomizeOptions = (props: IappleWatchCustomizeOptions) => {
  const {
    setSelectedCustomizeOption,
    selectedCustomizeOption,
    setSelectedWatchCase,
    selectedWatchCase,
    selectedWatchBand,
    setSelectedWatchBand,
    setSelectedWatchSize,
    selectedWatchSize,
  } = props;
  const sizeRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  const [sizesWidth, setSizesWidth] = useState(100);
  const [caseWidth, setCaseWidth] = useState(100);
  const [bandWidth, setBandWidth] = useState(100);

  const updateWidths = () => {
    if (sizeRef.current) {
      setSizesWidth(sizeRef.current.offsetWidth + 61);
    }
    if (caseRef.current) {
      setCaseWidth(caseRef.current.offsetWidth + 61);
    }
    if (bandRef.current) {
      setBandWidth(bandRef.current.offsetWidth + 55);
    }
  };

  // Run width calculations when the component mounts and when the content changes
  useEffect(() => {
    updateWidths();
  }, [selectedCustomizeOption]);
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box
        className={`${HomepageCss.CustomOptionsDiv} ${
          selectedCustomizeOption === SIZE_TEXT
            ? HomepageCss.CustomOptionsDivExpanded
            : ""
        }`}
        style={{
          width:
            selectedCustomizeOption === SIZE_TEXT ? `${sizesWidth}px` : "100px",
          transition: "width 0.5s ease",
        }}
      >
        <SizeButtonIcon />
        <div ref={sizeRef} style={{ display: "flex", gap: "5px" }}>
          {selectedCustomizeOption === SIZE_TEXT ? (
            APPLE_WATCH_SIZES_LIST.map((eachSize: string) => (
              <Typography
                className={HomepageCss.CustomOptionsText}
                onClick={() => setSelectedWatchSize(eachSize as IWatchSizes)}
                style={{ fontWeight: selectedWatchSize==eachSize ? "bold" : "normal" }}
              >
                {eachSize}
              </Typography>
            ))
          ) : (
            <Typography
              className={HomepageCss.CustomOptionsText}
              onClick={() => setSelectedCustomizeOption(SIZE_TEXT)}
            >
              Size
            </Typography>
          )}
        </div>
      </Box>
      {/* Case Option */}
      <Box
        className={`${HomepageCss.CustomOptionsDiv} ${
          selectedCustomizeOption === CASE_TEXT
            ? HomepageCss.CustomOptionsDivExpanded
            : ""
        }`}
        style={{
          width:
            selectedCustomizeOption === CASE_TEXT ? `${caseWidth}px` : "100px",
          transition: "width 0.5s ease",
        }}
      >
        <CaseButtonIcon />
        <div ref={caseRef} style={{ display: "flex", gap: "5px" }}>
          {selectedCustomizeOption === CASE_TEXT ? (
            APPLE_WATCH_CASES_LIST.map((eachCase: string) => (
              <Typography
                className={HomepageCss.CustomOptionsText}
                onClick={() => setSelectedWatchCase(eachCase as ICaseType)}
                style={{ fontWeight: selectedWatchCase==eachCase ? "bold" : "normal" }}
              >
                {eachCase}
              </Typography>
            ))
          ) : (
            <Typography
              className={HomepageCss.CustomOptionsText}
              onClick={() => setSelectedCustomizeOption(CASE_TEXT)}
            >
              Case
            </Typography>
          )}
        </div>
      </Box>
      {/* Band Option */}
      <Box
        className={`${HomepageCss.CustomOptionsDiv} ${
          selectedCustomizeOption === BAND_TEXT
            ? HomepageCss.CustomOptionsDivExpanded
            : ""
        }`}
        style={{
          width:
            selectedCustomizeOption === BAND_TEXT ? `${bandWidth}px` : "100px",
          transition: "width 0.5s ease",
        }}
      >
        <BandButtonIcon />
        <div ref={bandRef} style={{ display: "flex", gap: "5px" }}>
          {selectedCustomizeOption === BAND_TEXT ? (
            APPLE_WATCH_BANDS_LIST.map((eachBand: string) => (
              <Typography
                className={HomepageCss.CustomBandsText}
                onClick={() => setSelectedWatchBand(eachBand)}
                style={{
                  fontWeight:
                    selectedWatchBand === eachBand ? "bold" : "normal",
                }}
              >
                {eachBand}
              </Typography>
            ))
          ) : (
            <Typography
              className={HomepageCss.CustomOptionsText}
              onClick={() => setSelectedCustomizeOption(BAND_TEXT)}
            >
              Band
            </Typography>
          )}
        </div>
      </Box>
    </Box>
  );
};
export default AppleWatchCustomizeOptions;
