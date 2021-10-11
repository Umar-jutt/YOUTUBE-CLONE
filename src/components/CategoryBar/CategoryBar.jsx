import React, { useState } from "react";
import "./_CategoryBar.scss";

const Keywords = [
  "All",
  "Reactjs",
  "Angular js",
  "react native",
  "use of Api",
  "Redux ",
  "Music",
  "All",
  "Reactjs",
  "Angular js",
  "react native",
  "use of Api",
  "Redux ",
  "Music",
  "All",
  "Reactjs",
  "Angular js",
  "react native",
  "use of Api",
  "Redux ",
  "Music",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="categoriesBar">
      {Keywords.map((value, i) => (
        <span
          onClick={() => setActiveElement(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
