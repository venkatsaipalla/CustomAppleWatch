import {
  APPLE_WATCH_SE_TEXT,
  APPLE_WATCH_HERMES_SERIES_10_TEXT,
  APPLE_WATCH_SERIES_10_TEXT,
  TITANIUM_TEXT,
  ALUMINIUM_TEXT,
} from "../../commonConstants/constants";

export type ICollectionsType = {
  id: number;
  typeName:
    | typeof APPLE_WATCH_SERIES_10_TEXT
    | typeof APPLE_WATCH_HERMES_SERIES_10_TEXT
    | typeof APPLE_WATCH_SE_TEXT;
};

export type ISelectedWatchInfoPrps = {
  selectedCollectionsType: ICollectionsType;
  selectedWatchType : ISelectedWatchTypes;
};
export type ICaseType = typeof ALUMINIUM_TEXT | typeof TITANIUM_TEXT;
export type ICustomizeOption = "" | "Size" | "Case" | "Band";
export type IWatchSizes = "46mm" | "42mm";
export type ISelectedWatchTypes = {
  size: IWatchSizes;
  caseType: ICaseType
  bandType: string;
  collectionType: ICollectionsType;
  title: string;
  cost: string | number;
};
