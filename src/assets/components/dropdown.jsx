import React, { useState } from "react";
import arrowImage from "../images/dropdown_arrow.png";

const Dropdown = ({ title, children }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="dropdown">
         <div className="dropdown-header" onClick={toggleDropdown}>
            <h2>{title}</h2>
            <img
               src={arrowImage}
               alt="Dropdown arrow"
               className={`dropdown-arrow ${isOpen ? "open" : ""}`}
            />
         </div>
         {isOpen && <div className="dropdown-content">{children}</div>}
      </div>
   );
};

export default Dropdown;
