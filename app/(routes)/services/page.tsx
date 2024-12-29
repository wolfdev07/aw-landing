import Link from "next/link";
import TransitionPage from "@/components/transition-page";
import ContainerComponent from "@/components/container";
import SliderServices from "@/components/slider-services";


const ServicesPage = () => {
    return (
        <>  
            <TransitionPage />
            <ContainerComponent>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">

                        <h1 className="text-2xl leading-tight text-center mb-5 md:text-left md:text-4xl">Expertise <span className="font-bold text-primary"> Tecnológico</span></h1>
                        <p className="hidden md:block">Los invito a ver mi sección de proyectos, en las que describo como he implementado soluciones, con mis <span className="font-bold text-primary">Tech Skills.</span></p>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>

                    <div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center justify-items-center">
                    <Link 
                        href="/portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                        rounded-xl hover:shadow-xl hover:shadow-withe/50">
                            Proyectos
                    </Link>
                </div>
            </ContainerComponent>
        </>
    );
}

export default ServicesPage;