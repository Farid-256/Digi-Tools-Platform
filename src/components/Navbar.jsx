import React, { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ purchasedProduct }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                
                <div>
                    <h1 className="text-3xl font-bold text-blue-600">DigiTools</h1>
                </div>

                
                <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">Products</a>
                    <a href="#" className="hover:text-blue-600 transition">Features</a>
                    <a href="#" className="hover:text-blue-600 transition">Pricing</a>
                    <a href="#" className="hover:text-blue-600 transition">Testimonials</a>
                    <a href="#" className="hover:text-blue-600 transition">FAQ</a>
                </div>

                
                <div className="flex items-center gap-5">
                    
                    
                    <div className="relative flex items-center border border-gray-300 px-5 py-2 rounded-3xl hover:border-blue-400 transition">
                        <FiShoppingCart className="text-2xl text-gray-700" />

                        <span className="absolute -top-1 -right-1  text-blue-500 text-xl font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {purchasedProduct.length}
                        </span>
                    </div>

                    
                    <button className="hidden md:block border border-gray-400 px-6 py-2 rounded-3xl text-gray-700 hover:bg-gray-100 transition">
                        Login
                    </button>

                    
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition font-medium">
                        Get Started
                    </button>

                    
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-3xl text-gray-700"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

           
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6">
                    <div className="flex flex-col gap-5 text-lg text-gray-600 font-medium">
                        <a href="#" className="hover:text-blue-600">Products</a>
                        <a href="#" className="hover:text-blue-600">Features</a>
                        <a href="#" className="hover:text-blue-600">Pricing</a>
                        <a href="#" className="hover:text-blue-600">Testimonials</a>
                        <a href="#" className="hover:text-blue-600">FAQ</a>
                        
                        <div className="pt-4 border-t border-gray-200">
                            <button className="w-full border border-gray-400 py-3 rounded-3xl mb-3">Login</button>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-3xl">Get Started</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;