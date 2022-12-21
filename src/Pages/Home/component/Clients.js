import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
    return (
        <section className="py-40">
        <div className="container  mx-auto space-y-24">
            <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src="https://i.ibb.co/hspjBdp/photo-1642543349642-0d04e91511c9-ixlib-rb-4-0.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                    <div className="lg:col-start-2 m-5 xl:mx-20">
                        <h3 className="text-3xl lg:text5xl font-bold tracking-tight sm:text-6xl">Buy and sell from Bike Sales Platform</h3>
                        <p className="mt-3 text-lg ">We are providing you resalling Bikes Platform where you can Buy and sell your Bikes Easily.</p>
            <Link to={'/signup'}>
            <button className='btn btn-primary my-10 btn-info text-white'> Signup Now</button>
            </Link>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    );
};

export default Clients;