import { useState } from "react";
import "../css/main.css";
import "../css/error.css";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div class="error">
         <h1>404</h1>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <p>
            <a href="/">Retourner sur la page d'accueil</a>
         </p>
      </div>
   );
};

export default Error;
