import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0D1B2A] p-4 z-50 fixed w-full top-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-[#E0E1DD] lg:text-2xl font-bold md:text-xl">
                    <Link to={"/"}>
                        <span className="text-3xl">D</span>ata-Dash
                    </Link>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center justify-center text-[#E0E1DD] text-lg font-semibold md:text-[16px]">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/generate-dashbord"}>Generate Dashboard</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact-us"}>Contact Us</Link>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="border border-green-300 text-green-300 px-4 py-2 rounded-full hover:text-[#E0E1DD] transition md:text-[16px] md:px-2 md:py-1 lg:px-5 lg:py-2.5">
                        <Link to={"/login"}>
                            Log in
                        </Link>
                    </button>
                    <button className="bg-green-500 text-[#E0E1DD] px-4 py-2 rounded-full  transition md:text-[16px] md:px-2 md:py-1 lg:px-5 lg:py-2.5">
                        <Link to={"/signup"}>
                            Sign up
                        </Link>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#E0E1DD] text-3xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden backdrop-blur-md  text-[#E0E1DD] p-4 space-y-3 mt-2 rounded-lg shadow-lg"
                    >
                        <Link to={"/"} className="block text-green-200  transition">Home</Link>
                        <Link to={"/generate-dashbord"} className="block text-green-200  transition">Generate Dashboard</Link>
                        <Link to={"/about"} className="block text-green-200  transition">About</Link>
                        <Link to={"/contact-us"} className="block text-green-200 transition">Contact Us</Link>
                        <button className="block w-full border border-green-300 text-green-300 py-2 rounded-full hover:bg-green-600 hover:text-[#E0E1DD] transition">
                            <Link to={"/login"}>
                                Log in
                            </Link>
                        </button>
                        <button className="block w-full bg-[#] text-[#E0E1DD] py-2 rounded-full hover:bg-green-600 transition">
                            <Link to={"/signup"}>
                                Sign up
                            </Link>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
