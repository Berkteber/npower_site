import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DieselGenerator from "./Pages/DieselGenerator.js";
import GasGenerator from "./Pages/GasGenerator.js";
import PortatifGeerator from "./Pages/PortatifGenerator.js";
import Contact from "./Pages/Contact";
import Catalog from "./Pages/Catalog.js";
import Footer from "./Components/Footer.js";
import BackToTop from "./Components/BackToTop.js";
import SesYalitimi from "./Pages/SesYalitimi.js";
import YakitTanki from "./Pages/YakitTanki.js";
import DisYakit from "./Pages/DisYakit.js";
import KurulumMontaj from "./Pages/KurulumMontaj.js";
import DusukVoltaj from "./Pages/DusukVoltaj.js";
import OrtaVoltaj from "./Pages/OrtaVoltaj.js";
import SismikTitresim from "./Pages/SismikTitresim.js";
import BlogSingle from "./Pages/BlogSingle.js";
import BlogList from "./Pages/BlogList.js";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); 
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setProgress(0);

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
        }
      }, 50); 

      await new Promise((resolve) => setTimeout(resolve, 3100));
      setLoading(false);
    };

    fetchData();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader progress={progress} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ses-yalitimi" element={<SesYalitimi />} />
        <Route path="/dusuk-voltaj" element={<DusukVoltaj />} />
        <Route path="/sismik-titresim" element={<SismikTitresim />} />
        <Route path="/orta-voltaj" element={<OrtaVoltaj />} />
        <Route path="/kurulum-montaj" element={<KurulumMontaj />} />
        <Route path="/dis-yakit" element={<DisYakit />} />
        <Route path="/yakit-tanki" element={<YakitTanki />} />
        <Route path="/diesel-generator" element={<DieselGenerator />} />
        <Route path="/gas-generator" element={<GasGenerator />} />
        <Route path="/portable-generator" element={<PortatifGeerator />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
