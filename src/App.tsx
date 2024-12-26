import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Button, Container, CssBaseline, ThemeProvider } from '@mui/material'; // MUI imports
import theme from './theme';//-
function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
