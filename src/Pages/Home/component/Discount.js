import React from 'react';

const Discount = () => {
    return (
        <section className='bg-[#3abff8]  text-white py-20 mt-32'>
            <div className=" container mx-auto">
	<div className="">
		<div className="flex flex-col lg:flex-row items-center justify-between ">
			<h2 className="text-center text-5xl tracking-tighter font-bold">Up to
				<br className="sm:hidden" /> 10% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span className='font-bold'>For free shipping! Use code: </span>
				<span className="font-bold text-lg border-dashed border-2 border-white px-3">FREEBike23</span>
			</div>

            
			<a href="#" rel="noreferrer noopener" className=" btn btn-info text-white px-5 mt-4 lg:mt-0 py-3 rounded-md border rounded-lg shadow-2xl">Shop Now</a>
		</div>
	</div>
</div>
        </section>
    );
};

export default Discount;