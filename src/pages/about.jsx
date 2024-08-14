import React, { useState } from "react";
import "../css/main.css";
import "../css/about.css";
import Dropdown from "../assets/components/dropdown";

const About = () => {
   return (
      <div className="about">
         <div className="banner bannerAbout"></div>
         <div className="dropdownContainer">
            <Dropdown className="dropdown dropdownAbout" title="Fiabilité">
               <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
               </p>
            </Dropdown>
            <Dropdown className="dropdown dropdownAbout" title="Respect">
               <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
               </p>
            </Dropdown>
            <Dropdown className="dropdown dropdownAbout" title="Service">
               <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
               </p>
            </Dropdown>
            <Dropdown className="dropdown dropdownAbout" title="Sécurité">
               <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
               </p>
            </Dropdown>
         </div>
      </div>
   );
};
export default About;
