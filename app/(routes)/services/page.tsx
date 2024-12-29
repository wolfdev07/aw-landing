import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/cover-particles";
import ContainerComponent from "@/components/container";
import SliderServices from "@/components/slider-services";


const ServicesPage = () => {
    return (
        <>  
            <CoverParticles />
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
            </ContainerComponent>
        </>
    );
}

export default ServicesPage;