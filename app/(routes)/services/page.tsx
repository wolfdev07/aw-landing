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
                <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px]">

                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Expertise <span className="font-bold text-primary"> Tecnológico.</span></h1>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>
                </div>
            </ContainerComponent>
        </>
    );
}

export default ServicesPage;