import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import Home from "./pages/Home";
import Menu1 from "./pages/Menu1";
import Menu3 from "./pages/Menu3";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <AnnouncementBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu3 />} />
          <Route path="/menu3" element={<Menu1 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
