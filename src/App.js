import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import YachtDetails from "./Pages/yachtDetails";
import Services from "./Pages/Services";
import Contact from "./Pages/ContactUs";
import HCB from "./Pages/HCB";
import Speciale from "./Pages/Speciale";
import Lujo from "./Pages/Lujo";
import Campeon from "./Pages/Campeon";
import Suenos from "./Pages/Suenos";
import Estrella from "./Pages/Estrella";
import NewsEvents from "./Pages/NewsEvents";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import NewsDetails from "./Pages/newsDetails";
import NewsDetails1 from "./Pages/newsDetails1";
import MarketingPolicy from "./Pages/MarketingPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Careers from "./Pages/Careers";
import NewsDetails2 from "./Pages/newsDetails2";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to the top of the page whenever the route changes
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/yachts-for-sale" element={<Search />} />
          <Route path="/yachtdetails/:id" element={<YachtDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/hcb" element={<HCB />} />
          <Route path="/39-speciale" element={<Speciale />} />
          <Route path="/42-lujo" element={<Lujo />} />
          <Route path="/48-campeon" element={<Campeon />} />
          <Route path="/53-suenos" element={<Suenos />} />
          <Route path="/65-estrella" element={<Estrella />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/newsDetails/aug28" element={<NewsDetails />} />
          <Route path="/newsDetails/aug3" element={<NewsDetails1 />} />
          <Route path="/newsDetails/feb24" element={<NewsDetails2 />} />
          <Route path="/marketing-policy" element={<MarketingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
