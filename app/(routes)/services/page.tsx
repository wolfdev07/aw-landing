import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/cover-particles";
import HeaderMinimal from "@/components/header-minimal";
import SliderServices from "@/components/slider-services";


const ServicesPage = () => {
    return (
        <>  
            <CoverParticles />
            <TransitionPage />
            <HeaderMinimal />
            
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl">Expertise <span className="font-bold text-primary"> Tecnológico</span></h1>
                    
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;