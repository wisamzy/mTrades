import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

function Footer() {
  const date = new Date().getFullYear();
  const size = 20;

  return (
    <footer className="bg-primary text-white py-6 mt-10 flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {date} MTs. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaInstagram size={size} />
          </a>
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <RiTelegramLine size={size} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaWhatsapp size={size} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
