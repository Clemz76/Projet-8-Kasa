import React from "react";

const Header = () => {
   return (
      <header>
         <nav>
            <img src="/src/assets/images/logo_kasa.png" alt="Kasa Logo" />
            <ul>
               <li>
                  <a href="/">Acceuil</a>
               </li>
               <li>
                  <a href="/about">A Propos</a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
