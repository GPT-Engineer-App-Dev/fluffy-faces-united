import { Home, PawPrint } from "lucide-react";
import Index from "./pages/Index.jsx";
import Puppies from "./pages/Puppies.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Puppies",
    to: "/puppies",
    icon: <PawPrint className="h-4 w-4" />,
    page: <Puppies />,
  },
];