import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Star, Hotel, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const hotels = [
  {
    id: 1,
    name: "Taj Palace",
    location: "New Delhi",
    price: 15000,
    rating: 4.8,
    image: "https://source.unsplash.com/800x600/?hotel,luxury",
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Fitness Center"],
  },
  {
    id: 2,
    name: "Heritage Grand",
    location: "Jaipur",
    price: 8500,
    rating: 4.5,
    image: "https://source.unsplash.com/800x600/?hotel,heritage",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Lakeside Resort",
    location: "Udaipur",
    price: 12000,
    rating: 4.7,
    image: "https://source.unsplash.com/800x600/?hotel,resort",
    amenities: ["Free WiFi", "Lake View", "Swimming Pool", "Spa", "Restaurant"],
  },
];

const HotelBooking: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return (
    <section id="hotels" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Find Perfect Accommodation</h2>
          <p className="text-gray-600 text-lg">
            Book hotels near monuments and attractions for a comfortable stay during your journey.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Search Hotels</CardTitle>
            <CardDescription>Find the perfect place to stay during your visit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Monument or Area" />
              </div>
              
              <div className="space-y-2">
                <Label>Check-in & Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateRange.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests">Guests</Label>
                <Input id="guests" placeholder="2 Adults, 0 Children" />
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-india-blue hover:bg-india-blue/90">
                  Search Hotels
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="card-hover overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel.image})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{hotel.name}</CardTitle>
                    <CardDescription>{hotel.location}</CardDescription>
                  </div>
                  <div className="flex items-center bg-india-saffron text-white px-2 py-1 rounded-md">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price per night</p>
                    <p className="text-xl font-bold">₹{hotel.price.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-india-saffron hover:bg-india-saffron/90">
                  <Hotel className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;
