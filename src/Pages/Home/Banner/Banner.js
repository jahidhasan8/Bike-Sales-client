import React from 'react';
import { Navigation,Autoplay, Pagination, A11y } from 'swiper';
import Wave from 'react-wavify'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        // <div className="carousel">
        //     <div id="slide1" className="carousel-item relative w-full h-[500px]">
        //         <img src="https://i.ibb.co/dmfV9xw/photo-1568772585407-9361f9bf3a87-ixlib-rb-4-0.jpg" className="w-full" alt=''/>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full h-[500px]">
        //         <img src="https://i.ibb.co/80rqNTq/photo-1558980664-10e7170b5df9-ixlib-rb-4-0.jpg" className="w-full" alt=''/>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full h-[500px]">
        //         <img src="https://i.ibb.co/QMB6V5n/photo-1552155634-312b6355173b-ixlib-rb-4-0.jpg" className="w-full" alt=''/>
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
        <section>
        <Swiper
        modules={[Navigation,Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
    >
      <SwiperSlide><img src="https://i.ibb.co/dmfV9xw/photo-1568772585407-9361f9bf3a87-ixlib-rb-4-0.jpg" className="w-full rounded-md" alt=''/></SwiperSlide>
      
      <SwiperSlide><img src="https://i.ibb.co/80rqNTq/photo-1558980664-10e7170b5df9-ixlib-rb-4-0.jpg" className="w-full rounded-md" alt=''/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/QMB6V5n/photo-1552155634-312b6355173b-ixlib-rb-4-0.jpg" className="w-full rounded-md" alt=''/></SwiperSlide>
      
      <SwiperSlide><img src="https://i.ibb.co/xMchzgS/honda-cbr150r-f02.jpg" className="w-full" alt=''/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/c3j7yZH/Yamaha-Vixion-R-18-03.jpg" className="w-full" alt=''/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/xMchzgS/honda-cbr150r-f02.jpg" className="w-full" alt=''/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/Ph7vjCn/red-motor-biking-road.jpg" className="w-full" alt=''/></SwiperSlide>
    </Swiper>



<Wave className='mt-0' fill='#3abff8'
        paused={false}
        options={{
          height: 0,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
  />
    </section>
    );
};

export default Banner;