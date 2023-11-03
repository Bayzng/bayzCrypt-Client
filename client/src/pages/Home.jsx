import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Transactions from "../components/Transactions";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        {/* <Navbar /> */}
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Home;
