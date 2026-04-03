import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-[#0F172A] text-gray-300 py-16">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-10">

                    
                    <div class="md:col-span-5">
                        <h2 class="text-3xl font-bold text-white mb-3">DigiTools</h2>
                        <p class="text-gray-400 leading-relaxed max-w-md">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    
                    <div class="md:col-span-2">
                        <h4 class="text-white font-semibold mb-4">Product</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="#" class="hover:text-white transition">Features</a></li>
                            <li><a href="#" class="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" class="hover:text-white transition">Templates</a></li>
                            <li><a href="#" class="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    
                    <div class="md:col-span-2">
                        <h4 class="text-white font-semibold mb-4">Company</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="#" class="hover:text-white transition">About</a></li>
                            <li><a href="#" class="hover:text-white transition">Blog</a></li>
                            <li><a href="#" class="hover:text-white transition">Careers</a></li>
                            <li><a href="#" class="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    
                    <div class="md:col-span-2">
                        <h4 class="text-white font-semibold mb-4">Resources</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="#" class="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" class="hover:text-white transition">Community</a></li>
                            <li><a href="#" class="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div class="md:col-span-1">
                        <h4 class="text-white font-semibold mb-4">Social Links</h4>
                        <div class="flex gap-15">
                            <a href="#" class="w-9 h-9 flex items-center justify-center">
                                <span class="text-xl">X.com</span>
                            </a>

                            <a href="#" class="w-9 h-9 flex items-center justify-center">
                                <span class="text-xl">Linkedin</span>
                            </a>

                            <a href="#" class="w-9 h-9 flex items-center justify-center">
                                <span class="text-xl">Facebook</span>
                            </a>
                        </div>
                    </div>

                </div>

                
                <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 DigiTools. All rights reserved.</p>
                    <div class="flex gap-6 mt-4 md:mt-0">
                        <a href="#" class="hover:text-gray-300 transition">Privacy Policy</a>
                        <a href="#" class="hover:text-gray-300 transition">Terms of Service</a>
                        <a href="#" class="hover:text-gray-300 transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;