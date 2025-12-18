import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="

    mx-auto max-w-[1440px]">
      <Navbar />
      <main className=" lg:px-0 px-5 py-0 lg:py-[100px]">
        {children}   {/* 👈 This makes Home render */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
