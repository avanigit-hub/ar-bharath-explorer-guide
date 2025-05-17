
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MonumentViewer from "@/components/MonumentViewer";
import MapNavigation from "@/components/MapNavigation";
import HotelBooking from "@/components/HotelBooking";
import VehicleRental from "@/components/VehicleRental";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <MonumentViewer />
      <MapNavigation />
      <HotelBooking />
      <VehicleRental />
      <Footer />
    </div>
  );
};

export default Index;
