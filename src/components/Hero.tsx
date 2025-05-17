
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const Hero: React.FC = () => {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    loading: boolean;
    error: string | null;
  }>({
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
  });

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    setLocation((prev) => ({ ...prev, loading: true }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: null,
        });
      },
      (error) => {
        setLocation({
          latitude: null,
          longitude: null,
          loading: false,
          error: `Unable to retrieve your location: ${error.message}`,
        });
      }
    );
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?hampi,ruins,temple')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-india-blue/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Discover Hampi's Ancient Wonders Through Augmented Reality
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Explore the UNESCO World Heritage Site of Hampi with immersive 3D experiences and comprehensive travel assistance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-india-saffron hover:bg-india-saffron/90 text-white"
              onClick={handleGetLocation}
              disabled={location.loading}
            >
              {location.loading ? (
                "Getting Location..."
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" /> Enable Location
                </>
              )}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white"
            >
              <Navigation className="mr-2 h-4 w-4" /> Explore Nearby
            </Button>
          </div>

          {location.error && (
            <p className="mt-4 text-red-300 bg-red-900/20 p-2 rounded-md">
              {location.error}
            </p>
          )}
          
          {location.latitude && location.longitude && (
            <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-md">
              <p className="font-medium">Location detected!</p>
              <p className="text-sm">
                Latitude: {location.latitude.toFixed(4)}, Longitude:{" "}
                {location.longitude.toFixed(4)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
