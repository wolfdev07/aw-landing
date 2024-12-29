import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerComponent from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
    return(
        <>
            <TransitionPage />
            <ContainerComponent>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-tight text-center mb-5 md:text-left md:text-4xl">
                        Últimos 
                        <span className="font-bold text-primary"> Proyectos</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerComponent>
        </>
    );
}

export default PortfolioPage;