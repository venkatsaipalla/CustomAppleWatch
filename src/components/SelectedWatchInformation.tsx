import { Box, Typography } from "@mui/material";
import { ISelectedWatchInfoPrps } from "./interfaces/HomepageInterface";

export const SelectedWatchInformation = (props: ISelectedWatchInfoPrps) => {
  const { selectedCollectionsType } = props;
  return (
    <Box>
      <Typography variant="body2" style={{ textTransform: "uppercase",marginBottom:'5px' }}>
        {selectedCollectionsType.typeName}
      </Typography>
      <Typography variant="subtitle1" marginBottom={'5px'}>
        46mm Jet Black Aluminum Case with Black Solo Loop
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize:'14px'}}
        color="primary"
      >
        From $429
      </Typography>
    </Box>
  );
};
export default SelectedWatchInformation;
