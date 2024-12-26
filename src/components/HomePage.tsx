import { Box } from "@mui/material"
import Header from "./Header"
import HomePageStyles from "./Homepage.module.css"
const HomePage = ()=>{
    return(
        <Box className={HomePageStyles.HomePageContainerCSS}>
            <Header/>
        </Box>
    )
}

export default HomePage