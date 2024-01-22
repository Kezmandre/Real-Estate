import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Layout from "./Component/Layout/Layout";
import AboutPage from "./Pages/AboutPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout> } />
        <Route path="/contact" element={ <Layout> <ContactPage /></Layout> } />
        <Route path="/about" element={<Layout><AboutPage/></Layout>}/>
      </Routes>
    </div>
  );
};

export default Router;
