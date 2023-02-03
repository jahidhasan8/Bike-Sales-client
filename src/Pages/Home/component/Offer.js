import React from 'react';
import { FaMotorcycle,FaMoneyCheckAlt,FaServicestack } from "react-icons/fa";
const Offer = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src="https://i.ibb.co/ZW058MM/Aprilia-RS660-770x433.jpg" alt="" className=" rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src="https://i.ibb.co/G5J3h7Z/parts.jpg" alt="" className=" rounded-lg shadow-2xl  border-8 absolute right-5 top-1/2 w-3/5 " />
                </div>
                <div className='w-1/2'>
                    
                    <h1 className=" my-5 text-4xl font-bold">What We Offer</h1>
                   <div className='flex justify-between'>
                     <div className='text-4xl avatar text-white rounded-full p-2 bg-info  '>
                       <FaMotorcycle/>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl'>Pre-Sale Preparation</h1>
                        <p>We're able to offer financing rates that many other car dealers can't offer.</p>

                     </div>
                   </div>

                   <div className='flex justify-between mt-8'>
                     <div className='text-4xl avatar text-white rounded-full p-2 bg-info  '>
                       <FaMoneyCheckAlt/>
                     </div>
                     <div>
                        <h1 className='font-bold text-xl'>Financing</h1>
                        <p>We're able to offer financing rates that many other car dealers can't offer.</p>

                     </div>
                   </div>

                   <div className='flex justify-between mt-8'>
                     <div className='text-4xl text-white rounded-full bg-info p-2 '>
                       <FaServicestack/>
                     </div>
                     <div className=''>
                        <h1 className='font-bold text-xl'>Trade-In Service</h1>
                        <p>Our service allows you to purchase a new & old car at an attractive price.</p>

                     </div>
                   </div>
                    <button className="btn  bg-info mt-4 hover:bg-cyan-400">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;