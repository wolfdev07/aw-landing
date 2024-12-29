"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="w-full h-max">
            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className='bg-secondary/80 background-blur rounded-lg p-2 justify-content-center text-center p-5 mb-3'>
                        <div className="flex gap-3 items-center h-max border-primary">
                            <div className="mb-4 text-4xl text-primary">{item.icon}</div>
                            <h3 className="mb-4 text-lg"> {item.title}</h3>
                        </div>
                        <p className="text-sm mb-4">{item.description}</p>
                        <div className='grid grid-cols-4 items-bottom gap-2 mb-1'>
                            {item.img?.map((img, index) => (
                                /* eslint-disable @next/next/no-img-element */
                                <img key={index} src={img} className='w-full h-12 object-cover rounded-lg'/>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;