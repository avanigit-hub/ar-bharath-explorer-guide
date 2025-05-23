
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Navigation } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const monuments = [
  {
    id: 1,
    name: "Virupaksha Temple",
    location: "Hampi, Karnataka",
    distance: "1.5 km away",
    description: "Virupaksha Temple is an ancient temple dedicated to Lord Shiva, located in the ruins of ancient Hampi. It is still actively worshipped and stands as one of the oldest functioning temples in India.",
    imageUrl: "https://source.unsplash.com/800x600/?hampi,virupaksha",
    yearBuilt: "7th Century CE",
    builder: "Chalukya Dynasty",
    style: "Dravidian Architecture",
  },
  {
    id: 2,
    name: "Vittala Temple",
    location: "Hampi, Karnataka",
    distance: "3.2 km away",
    description: "The Vittala Temple is the most extravagant architectural showpiece of Hampi, known for its amazing stone chariot and musical pillars that produce musical notes when tapped.",
    imageUrl: "https://source.unsplash.com/800x600/?hampi,vittala",
    yearBuilt: "15th Century CE",
    builder: "Vijayanagara Empire",
    style: "Dravidian Architecture",
  },
  {
    id: 3,
    name: "Lotus Mahal",
    location: "Hampi, Karnataka",
    distance: "4.7 km away",
    description: "The Lotus Mahal is a beautiful two-storied pavilion with an intricate lotus-shaped structure, combining Hindu and Islamic architectural styles with recessed arched windows.",
    imageUrl: "https://source.unsplash.com/800x600/?hampi,lotusmahal",
    yearBuilt: "16th Century CE",
    builder: "Vijayanagara Empire",
    style: "Indo-Islamic Architecture",
  },
];

const MonumentViewer: React.FC = () => {
  const [selectedMonument, setSelectedMonument] = useState(monuments[0]);

  return (
    <section id="monuments" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Discover Hampi's Monuments in AR</h2>
          <p className="text-gray-600 text-lg">
            Explore Hampi's rich heritage and experience historical monuments through augmented reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {monuments.map((monument) => (
                <Card 
                  key={monument.id} 
                  className={`cursor-pointer transition-all ${
                    selectedMonument.id === monument.id 
                      ? "border-india-saffron border-2" 
                      : "hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedMonument(monument)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{monument.name}</CardTitle>
                      <Badge variant={monument.distance.includes("km away") ? "outline" : "default"}>
                        {monument.distance}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {monument.location}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div 
                className="h-64 sm:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedMonument.imageUrl})` }}
              />
              
              <Tabs defaultValue="info">
                <div className="px-6 pt-6 pb-2">
                  <TabsList className="w-full">
                    <TabsTrigger value="info" className="flex-1">Information</TabsTrigger>
                    <TabsTrigger value="ar" className="flex-1">AR View</TabsTrigger>
                    <TabsTrigger value="past" className="flex-1">Past & Present</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="info" className="m-0">
                  <CardHeader>
                    <CardTitle>{selectedMonument.name}</CardTitle>
                    <CardDescription>{selectedMonument.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{selectedMonument.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-gray-600">Year Built:</p>
                        <p>{selectedMonument.yearBuilt}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">Builder:</p>
                        <p>{selectedMonument.builder}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-600">Architectural Style:</p>
                        <p>{selectedMonument.style}</p>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="ar" className="m-0">
                  <CardHeader>
                    <CardTitle>AR Experience</CardTitle>
                    <CardDescription>Experience {selectedMonument.name} in augmented reality</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-lg h-48 w-full flex flex-col justify-center items-center p-6 mb-4">
                      <p className="text-center text-gray-500">
                        Enable camera access to view {selectedMonument.name} in AR
                      </p>
                    </div>
                    <Button className="w-full bg-india-saffron hover:bg-india-saffron/90">
                      Launch AR View
                    </Button>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="past" className="m-0">
                  <CardHeader>
                    <CardTitle>Past & Present</CardTitle>
                    <CardDescription>Compare historical and current views</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Historical View</p>
                        <div className="bg-gray-100 rounded-lg h-40 flex justify-center items-center">
                          <p className="text-gray-500 text-sm">Historical image</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Current View</p>
                        <div className="bg-gray-100 rounded-lg h-40 flex justify-center items-center">
                          <p className="text-gray-500 text-sm">Camera view</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>

              <CardFooter className="bg-gray-50 py-3">
                <Button 
                  variant="outline"
                  className="text-india-blue border-india-blue hover:bg-india-blue/10 mr-2"
                >
                  <Navigation className="h-4 w-4 mr-2" /> Navigate
                </Button>
                <Button className="bg-india-saffron hover:bg-india-saffron/90">
                  <Check className="h-4 w-4 mr-2" /> Visit This Monument
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonumentViewer;
