import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 pb-6 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Logo + Links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-700">
                    {/* Logo */}
                    <div className="flex w-[100%] md:w-auto justify-center md:justify-between items-center gap-4 ">
                        <img
                            src={logo}
                            alt="Pugh & Karpov Logo"
                            className=" w-[20%] object-contain"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-end">
                        <Link to="/" className="hover:text-white transition">
                            Home
                        </Link>
                        <Link to="/bankruptcy" className="hover:text-white transition">
                            Bankruptcy
                        </Link>
                        <Link to="/criminal-traffic-defense" className="hover:text-white transition">
                            Criminal & Traffic
                        </Link>
                        <Link to="/personal-injury" className="hover:text-white transition">
                            Personal Injury
                        </Link>
                        <Link to="/contact" className="hover:text-white transition">
                            Have A Question?
                        </Link>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    © ThemesFlat 2018. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
