
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Hotel, Car, Calendar, Image, Video, Check } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-india-saffron" />,
      title: "GPS Tracking",
      description:
        "Automatically detect your location and find nearby monuments within the Hampi ruins complex.",
    },
    {
      icon: <Video className="h-10 w-10 text-india-blue" />,
      title: "AR Experiences",
      description:
        "View Hampi temples and structures in augmented reality and interact with 3D models.",
    },
    {
      icon: <Navigation className="h-10 w-10 text-india-green" />,
      title: "Smart Navigation",
      description:
        "Get real-time directions to reach Hampi's scattered monuments with turn-by-turn guidance.",
    },
    {
      icon: <Image className="h-10 w-10 text-india-gold" />,
      title: "Past vs Present",
      description:
        "Compare historical reconstructions with current ruins to visualize Hampi's former glory.",
    },
    {
      icon: <Hotel className="h-10 w-10 text-india-saffron" />,
      title: "Hotel Booking",
      description:
        "Find and book accommodation in and around the Hampi archaeological site.",
    },
    {
      icon: <Car className="h-10 w-10 text-india-blue" />,
      title: "Vehicle Rental",
      description:
        "Hire bicycles, scooters and cars to explore the vast expanse of Hampi ruins.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience Hampi Like Never Before</h2>
          <p className="text-gray-600 text-lg">
            AR HAMPI combines cutting-edge technology with Hampi's ancient ruins to create an immersive tourism experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-india-saffron">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
