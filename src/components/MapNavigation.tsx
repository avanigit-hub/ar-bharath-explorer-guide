import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin } from "lucide-react";

const MapNavigation: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Smart Navigation in Hampi</h2>
          <p className="text-gray-600 text-lg">
            Find your way through the vast Hampi archaeological site with our intelligent navigation system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Navigation Guide</CardTitle>
                <CardDescription>
                  Get real-time directions to Hampi's monuments
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {isNavigating ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-india-blue p-4 rounded">
                      <p className="font-medium">Currently navigating to:</p>
                      <p className="text-india-blue font-bold">Vittala Temple</p>
                      <p className="text-sm text-gray-500">Hampi, Karnataka</p>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="font-medium">Next Steps:</p>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                        <div className="bg-india-saffron rounded-full p-2 text-white">1</div>
                        <div>
                          <p className="font-medium">Continue straight for 300m</p>
                          <p className="text-sm text-gray-500">Along the riverside path</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                        <div className="bg-gray-300 rounded-full p-2 text-white">2</div>
                        <div>
                          <p className="font-medium">Turn right at the stone gateway</p>
                          <p className="text-sm text-gray-500">Follow the temple path</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                        <div className="bg-gray-300 rounded-full p-2 text-white">3</div>
                        <div>
                          <p className="font-medium">Continue for 400m</p>
                          <p className="text-sm text-gray-500">Destination will be on your left</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm bg-gray-100 p-3 rounded-md">
                      <div>
                        <p>Distance remaining</p>
                        <p className="font-bold">0.7 km</p>
                      </div>
                      <div>
                        <p>Estimated arrival</p>
                        <p className="font-bold">10 minutes</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-6">
                    <div className="bg-gray-100 rounded-full p-6 mb-4">
                      <Navigation className="h-12 w-12 text-india-blue" />
                    </div>
                    <p className="text-center text-gray-500 mb-6">
                      Select a monument to start navigation
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsNavigating(true)}
                    >
                      Navigate to Vittala Temple
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t bg-gray-50">
                {isNavigating ? (
                  <Button 
                    variant="outline"
                    className="w-full text-red-600 border-red-600 hover:bg-red-50"
                    onClick={() => setIsNavigating(false)}
                  >
                    End Navigation
                  </Button>
                ) : (
                  <div className="text-xs text-gray-500 w-full text-center">
                    Enable location services for the best experience
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="h-full">
              <CardHeader className="pb-0">
                <CardTitle>Map of Hampi</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: "url('https://source.unsplash.com/1600x900/?map,hampi,karnataka')"
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!isNavigating && (
                      <div className="bg-white p-4 rounded-md shadow-lg max-w-xs text-center">
                        <p className="font-medium mb-2">Enable location to see nearby monuments</p>
                        <Button onClick={() => setIsNavigating(true)}>
                          <MapPin className="h-4 w-4 mr-2" /> Enable Location
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Map pins */}
                  {isNavigating && (
                    <>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-blue-500 h-4 w-4 rounded-full animate-ping absolute"></div>
                        <div className="bg-blue-500 h-4 w-4 rounded-full relative"></div>
                      </div>
                      <div className="absolute bottom-1/4 right-1/3">
                        <div className="bg-red-500 p-1 rounded-full">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div className="bg-white px-2 py-1 rounded text-xs font-medium shadow-md mt-1">
                          Vittala Temple
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapNavigation;
