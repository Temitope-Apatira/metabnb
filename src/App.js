import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Placetostay } from "./pages/Placetostay/Placetostay";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<Placetostay />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
