import React from 'react';
import dot from '../assets/products/dot.png';
import playBtn from '../assets/products/PlayBtn.png';
import bannar from '../assets/banner.png';

const Bannar = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 mx-auto py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                
                <div className="space-y-6 lg:space-y-8">
                    
                    
                    <div>
                        <button className="bg-blue-100 hover:bg-blue-200 transition flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium">
                            <img src={dot} alt="" className="w-4 h-4" />
                            New: AI-Powered Tools Available
                        </button>
                    </div>

                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        Supercharge Your Digital Workflow
                    </h2>

                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. 
                        Start creating faster today.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl font-medium transition text-lg">
                            Explore Products
                        </button>

                        <button className="flex items-center justify-center gap-3 border border-blue-700 hover:bg-blue-50 px-8 py-4 rounded-3xl font-medium transition text-lg">
                            <img src={playBtn} alt="" className="w-6 h-6" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img 
                        src={bannar} 
                        alt="Banner" 
                        className="w-full max-w-lg lg:max-w-none rounded-2xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Bannar;