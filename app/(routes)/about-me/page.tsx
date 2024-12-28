import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/cover-particles";
import ContainerComponent from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return (
        <>  
            <CoverParticles />
            <TransitionPage />
            <ContainerComponent>
                <h1 className="text-2xl leading-tight text-center md:left md:text-5xl md-mt-10">
                    Experiencia <span className="font-bold text-primary">Profesional</span>
                </h1>
                
                <CounterServices/>
                <TimeLine />

            </ContainerComponent>
            
        </>
    );
}

export default PageAboutMe;