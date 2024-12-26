import { createTheme } from "@mui/material";

// Add custom breakpoints
// Define a custom theme
const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Custom primary color
      },
      secondary: {
        main: '#dc004e', // Custom secondary color
      },
      background: {
        default: '#f4f6f8', // Custom background color
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            borderRadius: '8px', // Custom button border radius
          },
        },
      },
    },
  });
  
export default theme
  