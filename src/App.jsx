import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Menu4 from "./pages/Menu4";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import VerticalBack from "./pages/VerticalBack";
import HorizontalBack from "./pages/HorizontalBack";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <AnnouncementBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path="/menu3" element={<Menu3 />} />
          <Route path="/menu4" element={<Menu4 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verticalBack" element={<VerticalBack />} />
          <Route path="/horizontalBack" element={<HorizontalBack />} />
        </Routes>
      </div>
    </Router>
  );
}
