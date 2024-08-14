import "../css/Home.css";
import "../css/main.css";
import { Link } from "react-router-dom";
import logementList from "../assets/components/logements";

const Home = () => {
   return (
      <div className="page">
         <div className="banner">
            <h1>Chez vous, partout et ailleurs</h1>
         </div>
         <div className="locations">
            {logementList.map((logement) => (
               <Link
                  to={"/location/" + logement.id}
                  className="location"
                  key={logement.id}
               >
                  <img
                     src={logement.cover}
                     alt={logement.title}
                     className="locationImage"
                  />
                  <div className="locationTitle">{logement.title}</div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Home;
