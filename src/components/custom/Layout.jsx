import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-[#0d0d0d] flex flex-col min-h-screen">
        <main className="flex-grow">
          <Outlet /> {/* Your page components render here */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
