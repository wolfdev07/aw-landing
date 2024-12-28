"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const Intruduction = () => {
    return (
        <div className="z-20 w-full grid justify-items-center bg-darkBg/60">
            <div className="z-20 grid items-center h-full">
                <div className="flex flex-col justify-center max-w-md">

                    <p className="mb-3 p-3 text-2xl leading-tight text-center md:text-4xl md:mb-10">
                        Desarrollador <br />
                        <TypeAnimation
                        sequence={[
                            "Backend/Frontend",
                            2500,
                            "con 4 años de experiencia profesional",
                            2500,
                            "con Pasión por la Innovación, Tecnología y Ciencia",
                            2500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-bold text-primary"
                        />
                    </p>

                    <div className="flex items-center justify-center gap-3 md-justify-start md:gap-10">

                        <Link 
                        href="/projects" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl
                        text-primary border-primary
                        hover:shadow-xl hover:shadow-withe/50">
                            Proyectos
                        </Link>

                        <Link 
                        href="/about-me" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                        rounded-xl hover:shadow-xl hover:shadow-withe/50">
                            Experiencia
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intruduction;