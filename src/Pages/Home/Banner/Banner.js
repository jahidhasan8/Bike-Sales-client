import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-50">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/dmfV9xw/photo-1568772585407-9361f9bf3a87-ixlib-rb-4-0.jpg" className="w-full h-2/3" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/80rqNTq/photo-1558980664-10e7170b5df9-ixlib-rb-4-0.jpg" className="w-full h-2/3" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QMB6V5n/photo-1552155634-312b6355173b-ixlib-rb-4-0.jpg" className="w-full h-2/3" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;