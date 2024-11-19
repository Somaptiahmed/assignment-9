
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LoadData from "../components/LoadData";
import Animation from "../components/Animation";
import Footer from "../components/Footer";

const Home = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true, 
    });
  }, []);

  return (
    <div className="font-poppins">
      <header className="py-10 sticky top-0 z-50 bg-white">
        <Header />
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5">
        <Banner />
        <Animation />
        <section className="w-11/12 mx-auto pt-5" data-aos="fade-up">
          
          <LoadData />
        </section>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="pt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

