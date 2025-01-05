import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-[112%] py-12  flex items-center justify-between text-2xl">
      <div className="flex items-center gap-1 text-gray-600">
        © {currentYear}, made with
        <Heart className="w-4 h-4 fill-red-500 text-red-500" /> 
        <a href="#" className="text-blue-500 hover:text-blue-700">
          ThemeSelection
        </a>
      </div>

      <nav className="flex gap-4">
        <a href="#" className="text-blue-500 hover:text-blue-600">
          License
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          More Themes
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Documentation
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Support
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
