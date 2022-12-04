import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ColorChanger from "./components/ColorChanger";

const App = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      {/* <Navbar /> */}
      <ColorChanger />
    </div>
  );
};

export default App;
