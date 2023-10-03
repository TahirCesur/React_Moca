import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import QuarriesPage from "../pages/QuarriesPage";
import AntalyaElmali1Page from "../pages/AntalyaElmali1Page";
import AntalyaElmali2Page from "../pages/AntalyaElmali2Page";
import BursaOrhaneliPage from "../pages/BursaOrhaneliPage";
import BalikesirWhiteRiverPage from "../pages/BalikesirWhiteRiverPage";
import ElmaliCosmosBeigePage from "../pages/ElmaliCosmosBeigePage";
import ElmaliCloudyBeigePage from "../pages/ElmaliCloudyBeigePage";
import ElmaliBaiyulanPage from "../pages/ElmaliBaiyulanPage";
import CremaMontanaBeigePage from "../pages/CremaMontanaBeigePage";
import LetoonBeigePage from "../pages/LetoonBeigePage";
import ShandianBeigePage from "../pages/ShandianBeigePage";
import LightEmperadorPage from "../pages/LightEmperadorPage";
import TopBarPage from "../pages/TopBarPage";

const CustomRoutes = () => {
  return (
    <Routes>
    <Route exact path="/TopBar" element={<TopBarPage />} />
      <Route path="/lightemperador" element={<LightEmperadorPage />} />
      <Route path="/shandianbeige" element={<ShandianBeigePage />} />
      <Route path="/letoonbeige" element={<LetoonBeigePage />} />
      <Route path="/cremamontanabeige" element={<CremaMontanaBeigePage />} />
      <Route path="/elmalibaiyulan" element={<ElmaliBaiyulanPage />} />
      <Route path="/elmalicloudybeige" element={<ElmaliCloudyBeigePage />} />
      <Route path="/elmalicosmosbeige" element={<ElmaliCosmosBeigePage />} />
      <Route
        path="/balikesirwhiteriver"
        element={<BalikesirWhiteRiverPage />}
      />
      <Route path="/bursaorhaneli" element={<BursaOrhaneliPage />} />
      <Route path="/antalyaelmali2" element={<AntalyaElmali2Page />} />
      <Route path="/antalyaelmali1" element={<AntalyaElmali1Page />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/urunlerimiz" element={<ProductPage />} />
      <Route path="/hakkimizda" element={<AboutPage />} />
      <Route path="/ocaklarimiz" element={<QuarriesPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
