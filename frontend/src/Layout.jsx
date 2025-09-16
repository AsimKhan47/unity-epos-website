// src/Layout.jsx
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <div > 
     
      <Navbar />
      <main className=" pt-[50px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
