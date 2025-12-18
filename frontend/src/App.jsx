// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Product from "./Pages/Product";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import HowItWork from "./pages/HowItWork";
import Case from "./pages/Case";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product />} />
          
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<Faq/>} /> 
          <Route path="/howitwork" element={<HowItWork/>} /> 
             <Route path="/case" element={<Case/>} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
