// src/components/Layout.js
import React from "react";
import Header from "../components/demoHome/Header";
import Footer from "../components/demoHome/Footer";
import { Outlet } from "react-router-dom"; // Outlet bileşenini import et

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header */}
      <main className="flex-grow">
        <Outlet /> {/* Alt rotaların içeriği burada render edilir */}
      </main>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default Layout;
