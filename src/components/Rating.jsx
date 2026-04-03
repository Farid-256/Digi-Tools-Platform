import React from 'react';

const Rating = () => {
    return (
        <section className="bg-blue-700 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">

                   
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-5xl md:text-6xl font-bold">50K+</h3>
                        <p className="text-blue-100 text-xl md:text-2xl mt-3">Active Users</p>
                    </div>

                    
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-5xl md:text-6xl font-bold">200K+</h3>
                        <p className="text-blue-100 text-xl md:text-2xl mt-3">Premium Tools</p>
                    </div>

                    
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-5xl md:text-6xl font-bold">4.9</h3>
                        <p className="text-blue-100 text-xl md:text-2xl mt-3">Rating</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Rating;