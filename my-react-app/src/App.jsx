import './App.css'
import Home from './pages/Home'
import './assets/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ServicePage from "./pages/ServicePage";
import SeaFreight from "./pages/SeaFreight";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/SeaFreight" element={<SeaFreight />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// hellow world
export default App
