
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="font-merriweather font-bold text-2xl">
            <span className="text-india-saffron">AR</span>{" "}
            <span className="text-india-blue">BHARATH</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-india-blue/20 to-india-saffron/20 p-6 no-underline outline-none focus:shadow-md"
                          href="#monuments"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-india-blue">
                            Discover Monuments
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Experience India's heritage in augmented reality
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#features" title="Features">
                      AR viewing, navigation guidance and more
                    </ListItem>
                    <ListItem href="#hotels" title="Hotels">
                      Find and book the perfect accommodation
                    </ListItem>
                    <ListItem href="#vehicles" title="Vehicles">
                      Rent vehicles for your journey
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#hotels" className="flex items-center px-4 py-2 text-sm font-medium">
                  Hotels
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#vehicles" className="flex items-center px-4 py-2 text-sm font-medium">
                  Vehicles
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-india-saffron hover:bg-india-saffron/90">Get Started</Button>
        </div>

        <Button variant="ghost" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
