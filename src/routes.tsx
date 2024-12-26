// src/route.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
// import About from './About'; // You can add your components here
// import Contact from './Contact'; // You can add your components here

const RouteConfig: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default RouteConfig;
