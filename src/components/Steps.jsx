import React from 'react';
import user from '../assets/user.png'
import pack from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Steps = () => {
    return (
        <section className='bg-gray-100 py-10'>
            <div className='flex flex-col items-center space-y-4 py-20'>
                <h3 className='text-4xl font-bold'>Get Started in 3 Steps</h3>
                <h6 className='text-xs text-gray-400'>Start using premium digital tools in minutes, not hours.</h6>
            </div>

            <div className='flex justify-center gap-10'>
                <div className='bg-white border border-gray-200 rounded-xl w-[25%] p-5 
                relative'>
                    <div className='absolute top-7 right-7'>
                        <span className='bg-blue-800 text-white rounded-full p-3'>01</span>
                    </div>

                    <div className='flex flex-col items-center space-y-5'>
                        <div>
                            <img className='bg-gray-300 p-5 rounded-full' src={user} alt="" />
                        </div>

                        <div className='flex flex-col items-center space-y-2'>
                            <h3 className='text-2xl text-blue-900'>Create Account</h3>
                            <h6 className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</h6>
                        </div>
                    </div>
                </div>



                <div className='bg-white border border-gray-200 rounded-xl w-[25%] p-5 
                relative'>
                    <div className='absolute top-7 right-7'>
                        <span className='bg-blue-800 text-white rounded-full p-5'>02</span>
                    </div>

                    <div className='flex flex-col items-center space-y-5'>
                        <div>
                            <img className='bg-gray-300 p-5 rounded-full' src={pack} alt="" />
                        </div>

                        <div className='flex flex-col items-center space-y-2'>
                            <h3 className='text-2xl text-blue-900'>Choose Products</h3>
                            <h6 className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</h6>
                        </div>
                    </div>
                </div>




                <div className='bg-white border border-gray-200 rounded-xl w-[25%] p-5 
                relative'>
                    <div className='absolute top-7 right-7'>
                        <span className='bg-blue-800 text-white rounded-full p-3'>03</span>
                    </div>

                    <div className='flex flex-col items-center space-y-5'>
                        <div>
                            <img className='bg-gray-300 p-5 rounded-full' src={rocket} alt="" />
                        </div>

                        <div className='flex flex-col items-center space-y-2'>
                            <h3 className='text-2xl text-blue-900'>Start Creating</h3>
                            <h6 className='text-gray-400'>Download and start using your premium tools immediately.</h6>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Steps;