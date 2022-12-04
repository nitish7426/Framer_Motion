import React, { useState } from "react";
import { colors } from "./colors";
import logo from "../assets/Tailwind_CSS_logo.svg";

const ColorChanger = () => {
  const [color, setColor] = useState("bg-white");
  return (
    <section
      className={`h-full ${color} w-full flex flex-col gap-4 items-center justify-center duration-300`}
    >
      <img src={logo} className="md:h-8 h-6" alt="" />
      <div className="bg-white border-2 rounded-lg max-w-sm flex items-center h-14">
        <select
          className="select select-ghost w-full max-w-xs"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option disabled selected>
            Pick the color
          </option>
          {colors.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default ColorChanger;
