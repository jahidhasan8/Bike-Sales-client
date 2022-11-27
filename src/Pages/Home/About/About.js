import React from 'react';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:w-1/2'>
                    <img src="https://i.ibb.co/Ph7vjCn/red-motor-biking-road.jpg" alt="" className=" rounded-lg shadow-2xl md:w-11/12 h-full" />
                </div>
                <div className='md:w-1/2'>
                    <p className="text-3xl  font-bold">
                        About Us
                    </p>
                    <h1 className=" my-5 text-2xl font-bold">Bike Sales is The Largest Resale Marketplace in Bangladesh!</h1>
                    <p className="py-2">Bike Sales is a platform on which you can buy and sell secondHand Bike!Right now we have three categories our solutions are built to be safe, smart, and convenient for our customers.</p>
                    <p className="py-6">
                        At Bike Sales, we make it so easy to connect people to buy, sell.
                        - Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.
                        - Post Ads Free: As a free classified website, we offer free ad posting features in three categories for the convenience of the users based on their locations.
                    </p>
                    <button className="btn btn-info text-white font-bold">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;