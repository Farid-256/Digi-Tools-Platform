import React from 'react';
import tic from '../assets/products/Check.png'

const Pricing = () => {
    return (
        <section class="py-16 bg-gray-100">
            <div class="max-w-6xl mx-auto px-4">
         
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p class="text-gray-600 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                   
                    <div class="border border-amber-200 bg-amber-50 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h3 class="text-xl font-semibold text-gray-800 mb-1">Starter</h3>
                        <p class="text-gray-500 text-sm mb-6">Perfect for getting started</p>

                        <div class="mb-8">
                            <span class="text-5xl font-bold">$0</span>
                            <span class="text-gray-500">/Month</span>
                        </div>

                        <ul class="space-y-4 mb-10">
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Access to 10 free tools
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Basic templates
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Community support
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> 1 project per month
                            </li>
                        </ul>

                        <button class="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl transition">
                            Get Started Free
                        </button>
                    </div>

                
                    <div class="border-2 border-purple-600 rounded-3xl p-8 relative bg-blue-500 hover:shadow-2xl transition-all scale-105">
                      
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-6 py-1 rounded-full">
                            <h4>Most Popular</h4>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-1">Pro</h3>
                        <p class="text-gray-500 text-sm mb-6">Best for professionals</p>

                        <div class="mb-8">
                            <span class="text-5xl font-bold text-white">$29</span>
                            <span class="text-white">/Month</span>
                        </div>

                        <ul class="space-y-4 mb-10">
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Access to all premium tools
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Unlimited templates
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Priority support
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Unlimited projects
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Cloud sync
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Advanced analytics
                            </li>
                        </ul>

                        <button class="w-full py-4 bg-white hover:bg-amber-200 hover:text-blue-600 text-blue-500 font-medium rounded-2xl transition">
                            Start Pro Trial
                        </button>
                    </div>

            
                    <div class="border border-amber-200 bg-amber-50 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h3 class="text-xl font-semibold text-gray-800 mb-1">Enterprise</h3>
                        <p class="text-gray-500 text-sm mb-6">For teams and businesses</p>

                        <div class="mb-8">
                            <span class="text-5xl font-bold">$99</span>
                            <span class="text-gray-500">/Month</span>
                        </div>

                        <ul class="space-y-4 mb-10">
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Everything in Pro
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Team collaboration
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Custom integrations
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Dedicated support
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> SLA guarantee
                            </li>
                            <li class="flex items-center gap-3 text-gray-700">
                                <span class="text-green-500"> <img src={tic} alt="" /> </span> Custom branding
                            </li>
                        </ul>

                        <button class="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl transition">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;