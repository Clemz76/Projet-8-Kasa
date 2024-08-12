import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import "../css/main.css";
import Error from "./error.jsx";
import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer.jsx";
import Location from "./location.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<about />} />
            <Route path="location/:id" element={<Location />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </React.StrictMode>
);
