import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
   const Location = useLocation();
   console.log(Location.pathname);
   return (
      <header>
         <nav>
            <img src="/src/assets/images/logo_kasa.png" alt="Kasa Logo" />
            <ul>
               <li>
                  <a
                     className={Location.pathname === "/" ? "active" : ""}
                     href="/"
                  >
                     Acceuil
                  </a>
               </li>
               <li>
                  <a
                     className={Location.pathname === "/about" ? "active" : ""}
                     href="/about"
                  >
                     A Propos
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
