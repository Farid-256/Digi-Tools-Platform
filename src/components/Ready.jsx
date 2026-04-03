import React from 'react';

const Ready = () => {
    return (
        <section class="bg-violet-600 py-20 text-white">
            <div class="max-w-4xl mx-auto px-6 text-center">

                
                <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                
                <p class="text-lg md:text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

               
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button class="bg-white text-violet-700 font-semibold px-8 py-4 rounded-full hover:bg-violet-100 transition-all text-lg cursor-pointer">
                        Explore Products
                    </button>

                    <button class="border-2 border-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-violet-700 transition-all text-lg cursor-pointer">
                        View Pricing
                    </button>
                </div>

               
                <p class="mt-10 text-sm text-violet-200">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default Ready;