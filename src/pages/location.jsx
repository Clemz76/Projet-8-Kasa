import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/location.css";
import "../css/main.css";
import logementList from "../assets/components/logements";
import Dropdown from "../assets/components/dropdown"; // Ensure the correct import
import arrowRight from "../assets/images/arrow_right.png";
import arrowLeft from "../assets/images/arrow_left.png";

const Location = () => {
   const { id } = useParams();
   const logement = logementList.find((item) => item.id === id);
   const [currentSlide, setCurrentSlide] = useState(0);

   const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % logement.pictures.length);
   };

   const prevSlide = () => {
      setCurrentSlide(
         (prev) =>
            (prev - 1 + logement.pictures.length) % logement.pictures.length
      );
   };

   return (
      <div className="page">
         <div className="logement-gallery">
            <div className="slider">
               <img
                  src={logement.pictures[currentSlide]}
                  alt={`${logement.title} ${currentSlide + 1}`}
                  className="main-image"
               />
               <button className="prev" onClick={prevSlide}>
                  <img src={arrowLeft} alt="Previous" className="arrow" />
               </button>
               <button className="next" onClick={nextSlide}>
                  <img src={arrowRight} alt="Next" className="arrow" />
               </button>
            </div>
         </div>
         <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
         </div>
         <div className="logement-tags">
            {logement.tags.map((tag, index) => (
               <span key={index} className="tag">
                  {tag}
               </span>
            ))}
         </div>
         <div className="logement-info">
            <Dropdown title="Description">
               <p>{logement.description}</p>
            </Dropdown>
            <Dropdown title="Équipements">
               <ul>
                  {logement.equipments.map((equipment, index) => (
                     <li key={index}>{equipment}</li>
                  ))}
               </ul>
            </Dropdown>
         </div>
         <div className="logement-host">
            <div className="host-info">
               <img src={logement.host.picture} alt={logement.host.name} />
               <div>
                  <h3>{logement.host.name}</h3>
               </div>
            </div>
            <div className="rating">
               {Array.from({ length: 5 }, (_, index) => (
                  <span key={index}>
                     <img
                        src={
                           index < logement.rating
                              ? "/src/assets/images/star.png"
                              : "/src/assets/images/star_0.png"
                        }
                        alt={
                           index < logement.rating
                              ? "filled star"
                              : "unfilled star"
                        }
                        className={`star ${
                           index < logement.rating ? "filled" : "unfilled"
                        }`}
                     />
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Location;
