import { Center } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <Center>
      <Navbar />
      <Footer />
    </Center>
  );
}

export default App;
