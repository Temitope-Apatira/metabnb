import React from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
