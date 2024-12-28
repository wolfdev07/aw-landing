"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const Intruduction = () => {
    return (
        <div className="z-20 w-full grid justify-items-center bg-darkBg/60">
            <div className="z-20 grid items-center h-full">
                <div className="flex flex-col justify-center max-w-md">

                    <p className="text-4xl leading-tight text-center md:mb-10">Desarrollador</p>
                    
                    <p className="mb-3 text-2xl leading-tight text-center md:mb-10">
                        
                        <TypeAnimation
                        sequence={[
                            "con 4 años de experiencia",
                            2500,
                            "Backend",
                            2000,
                            "Frontend",
                            1500,
                            "Fullstack",
                            1500,
                            "DevOps",
                            1500,
                            "Python",
                            1500,
                            "Java",
                            1500,
                            "Angular",
                            1500,
                            "C++",
                            1500,
                            "con Pasión por la Innovación",
                            2500,
                            "Amante de la Tecnología y Ciencia",
                            2500,
                            "y Catador de Taquitos",
                            2500,
                            "y Especialista en Batman",
                            2500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-bold text-primary"
                        />
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-5 md-justify-start md:gap-10">

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