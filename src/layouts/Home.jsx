// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import Banner from "../components/Banner";
// import LoadData from "../components/LoadData";
// import Footer from "../components/Footer";


// const HomeLayout = () => {
//   return (
//     <div className="font-poppins">
//       <header className="py-10 sticky top-0 z-50 bg-white">
//         <Header></Header>
        
//       </header>
//       <nav className="w-11/12 mx-auto py-2 ">
//         <Navbar></Navbar>
//       </nav>
//       <main className="w-11/12 mx-auto pt-5 ">
//       <Banner></Banner>
//       <LoadData></LoadData>
        
//         <section className="">
//           <Outlet></Outlet>
//         </section>
        
//       </main>
//       <footer  className="pt-5 ">
//         <Footer></Footer>
//       </footer>
//     </div>
//   );
// };

// export default HomeLayout;


import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LoadData from "../components/LoadData";
import Footer from "../components/Footer";
import "animate.css";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header className="py-10 sticky top-0 z-50 bg-white">
        <Header></Header>
      </header>
      <nav className="w-11/12 mx-auto py-2 ">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 ">
        <Banner></Banner>
        
        {/* Applying Animate.css to LoadData */}
        <section className="animate__animated animate__fadeIn animate__delay-1s">
          <LoadData></LoadData>
        </section>
        
        <section className="">
          <Outlet></Outlet>
        </section>
      </main>
      <footer className="pt-5 ">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;