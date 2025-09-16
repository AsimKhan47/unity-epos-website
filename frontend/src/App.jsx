import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/Contact";
import HowItWork from "./Pages/HowItWork";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          
          <Route path="/" element={<Home />} />

         
          <Route path="/pricing" element={<Pricing />} />

          {/* Other Pages */}
          <Route path="/how-it-works" element={<HowItWork/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
