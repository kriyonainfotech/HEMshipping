import './App.css'
import Home from './pages/Home'
import './assets/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ServicePage from "./pages/ServicePage";
import SeaFreight from "./pages/SeaFreight";
import AirFreight from './pages/AirFreight';
import ProjectCargo from './pages/ProjectCargo';
import CustomsClearance from './pages/CustomsClearance';
import InlandService from './pages/Inland';
import Warehousing from "./pages/Warehousing";
import Contact from './pages/Contact';
import ScrollToTop from "../src/components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/Sea-Freight" element={<SeaFreight />} />
          <Route path="/services/Air-Freight" element={<AirFreight />} />
          <Route path="/services/Project-Cargo" element={<ProjectCargo />} />
          <Route
            path="/services/Customs-Clearance"
            element={<CustomsClearance />}
          />
          <Route
            path="/services/Inland-Transportation"
            element={<InlandService />}
          />
          <Route
            path="/services/Warehousing-Distribution"
            element={<Warehousing />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// hellow world
export default App
