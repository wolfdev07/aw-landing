"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className='bg-secondary rounded-lg p-2 justify-content-center text-center'>
                        <div className="flex px-6 md:py-8 h-max md:h-[290px] cursor-pointer sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-primary">
                            <div className="mb-4 text-4xl text-primary">{item.icon}</div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                        </div>
                        <p className="text-sm mb-4">{item.description}</p>
                        <div className='grid grid-cols-4 items-top gap-2 mb-1'>
                                {item.img?.map((img, index) => (
                                    <img key={index} src={img} className='w-20'/>
                                ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;