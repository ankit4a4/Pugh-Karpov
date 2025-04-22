import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/PK LOGO.jpg";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "BANKRUPTCY", path: "/bankruptcy" },
    { name: "CRIMINAL AND TRAFFIC DEFENSE", path: "/criminal-traffic-defense" },
    { name: "PERSONAL INJURY", path: "/personal-injury" },
    { name: "Have A Question?", path: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white shadow-lg border-b border-gray-200"
        >
            {/* Top Strip */}
            <div className="w-full bg-[#111827] text-center py-[0.8vh]">
                <p className="text-[1.5vh] md:text-[1.1vw] text-gray-100 font-semibold tracking-widest uppercase">
                    Pugh & Karpov Law, PC
                </p>
            </div>

            {/* Main Header */}
            <div className="mx-auto px-[5vw] py-[2vh] flex items-center justify-between">
                {/* Logo */}
                <div className="w-[40%] md:w-[15%]">
                    <Link to="/">
                        <img
                            className="w-[40%] object-contain"
                            src={logo} alt="" />
                    </Link>

                    {/* <p>Logo</p> */}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-[2.6vw]">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-[1.1vw] font-semibold uppercase tracking-wide transition duration-300 group ${isActive
                                    ? "text-[#DD3333]"
                                    : "text-gray-900 hover:text-[#DD3333]"
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute left-0 bottom-[-5px] h-[2.5px] rounded-full bg-[#DD3333] transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden  z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden fixed top-[12vh] left-0 w-full h-screen bg-white z-40 px-[6vw] pt-[5vh]"
                    >
                        <div className="flex flex-col space-y-[4vh]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[2.3vh] font-semibold uppercase tracking-wide border-b border-gray-200 pb-3 transition ${location.pathname === link.path
                                        ? "text-blue-700"
                                        : "text-gray-900 hover:text-blue-700"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
