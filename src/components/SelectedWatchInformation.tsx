import { Box, Typography } from "@mui/material";
import { ISelectedWatchInfoPrps } from "./interfaces/HomepageInterface";
import HomepageStyles from './Homepage.module.css'
export const SelectedWatchInformation = (props: ISelectedWatchInfoPrps) => {
  const { selectedCollectionsType,selectedWatchType } = props;
  return (
    <Box className={HomepageStyles.WatchInfoDisplayContainer}>
      <Typography variant="body2" style={{ textTransform: "uppercase",marginBottom:'5px' }}>
        {selectedCollectionsType.typeName}
      </Typography>
      <Typography variant="subtitle1" marginBottom={'5px'}>
        {selectedWatchType?.title}
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
