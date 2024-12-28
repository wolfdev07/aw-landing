import HeaderMinimal from "./header-minimal";

interface ContainerComponentProps {
    children: React.ReactNode;
}


const ContainerComponent = (props: ContainerComponentProps) => {
    const { children } = props;
    return (
        <section>
            <HeaderMinimal />
            <div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
                {children}
            </div>
        </section>
    );
}

export default ContainerComponent;