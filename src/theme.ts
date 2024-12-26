import { createTheme, PaletteOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      lightBlue: string;
      darkBlue: string;
      grey: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      lightBlue: string;
      darkBlue: string;
      grey: string;
    };
  }
}

// Add custom breakpoints
// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1d1f", // Custom primary color
    },
    secondary: {
      main: "#0071e3", // Custom secondary color
    },
    background: {
      default: "#f4f6f8", // Custom background color
    },
    customColors: {
      lightBlue: '#0071e3', // Custom color 1
      darkBlue: '#003366',  // Custom color 2
      grey: '#9e9e9e',     // Custom color 3
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "-.009em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "40px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
