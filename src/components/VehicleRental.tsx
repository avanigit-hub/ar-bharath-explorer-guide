import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Car, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const vehicles = [
  {
    id: 1,
    name: "Compact SUV",
    brand: "Hyundai Creta",
    price: 2500,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    image: "https://source.unsplash.com/800x600/?suv,car",
    available: true,
  },
  {
    id: 2,
    name: "Sedan",
    brand: "Honda City",
    price: 2000,
    seats: 5,
    transmission: "Manual",
    fuelType: "Diesel",
    image: "https://source.unsplash.com/800x600/?sedan,car",
    available: true,
  },
  {
    id: 3,
    name: "Royal Enfield",
    brand: "Classic 350",
    price: 1200,
    seats: 2,
    transmission: "Manual",
    fuelType: "Petrol",
    image: "https://source.unsplash.com/800x600/?motorcycle,bike",
    available: false,
  },
];

const VehicleRental: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Rent Vehicles for Your Journey</h2>
          <p className="text-gray-600 text-lg">
            Explore India at your own pace with our range of rental vehicles.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Find Vehicles</CardTitle>
            <CardDescription>Choose the perfect vehicle for your exploration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Pickup Location</Label>
                <Input id="location" placeholder="City or Airport" />
              </div>
              
              <div className="space-y-2">
                <Label>Rental Period</Label>
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
                <Label htmlFor="type">Vehicle Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="bike">Motorcycle</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-india-green hover:bg-india-green/90">
                  Search Vehicles
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card 
              key={vehicle.id} 
              className={cn(
                "card-hover overflow-hidden",
                !vehicle.available && "opacity-75"
              )}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{vehicle.name}</CardTitle>
                    <CardDescription>{vehicle.brand}</CardDescription>
                  </div>
                  {vehicle.available ? (
                    <div className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full font-medium">
                      Available
                    </div>
                  ) : (
                    <div className="bg-red-100 text-red-800 text-xs py-1 px-2 rounded-full font-medium">
                      Unavailable
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500">Seats</p>
                    <p className="font-medium">{vehicle.seats} Persons</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Transmission</p>
                    <p className="font-medium">{vehicle.transmission}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Fuel Type</p>
                    <p className="font-medium">{vehicle.fuelType}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price per day</p>
                  <p className="text-xl font-bold">₹{vehicle.price.toLocaleString()}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button 
                  className="bg-india-green hover:bg-india-green/90"
                  disabled={!vehicle.available}
                >
                  <Car className="mr-2 h-4 w-4" /> 
                  {vehicle.available ? "Book Now" : "Unavailable"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleRental;
