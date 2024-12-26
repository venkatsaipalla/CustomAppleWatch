import { APPLE_WATCH_SE_TEXT, APPLE_WATCH_HERMES_SERIES_10_TEXT, APPLE_WATCH_SERIES_10_TEXT } from "../../commonConstants/constants";

export type ICollectionsType = {
  id: number;
  typeName: 
    | typeof APPLE_WATCH_SERIES_10_TEXT
    | typeof APPLE_WATCH_HERMES_SERIES_10_TEXT
    | typeof APPLE_WATCH_SE_TEXT;
};
