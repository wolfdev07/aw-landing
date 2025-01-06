"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";

const SliderServices = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="w-full h-max">
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-secondary/80 background-blur rounded-lg p-2 justify-content-center text-center p-5 mb-3">
                        {/* Header del Slide */}
                        <div className="flex gap-3 items-center h-max border-primary">
                            <div className="mb-4 text-4xl text-primary">{item.icon}</div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                        </div>

                        {/* Descripción */}
                        <p className="text-sm mb-4">{item.description}</p>

                        {/* Imágenes */}
                        <div className="grid grid-cols-4 items-bottom gap-2 mb-1">
                            {item.img?.map((img, idx) => (
                                <div key={idx} className="w-full h-12 relative">
                                    {img ? (
                                        <Image
                                            src={img}
                                            alt={`Image for ${item.title} ${idx + 1}`}
                                            className="object-cover rounded-lg"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-12 bg-gray-200 rounded-lg">
                                            <span className="text-gray-500 text-xs">No image</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderServices;
