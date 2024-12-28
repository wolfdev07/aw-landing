import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

interface ProfilePhoto{
    children: React.ReactNode;
}

const Header = (props: ProfilePhoto) => {
    
    const { children } = props;

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5">
            <header>
                <div className="container rounded-lg bg-white/15 background-blur-sm justify-between max-w-6xl mx-auto p-4 md:flex md:p-2">
                    <Link href="/">
                        <div className="grid justify-items-center">
                            { children }
                        </div>
                        <h1 className="my-3 pb-0 mb-0 text-2xl font-bold text-center md:text-left">
                            Arturo Victoria
                        </h1>
                        <h2 className="mb-2 text-center md:text-left">
                            <span className="text-primary">Ingeniero de Software</span> 
                        </h2>
                    </Link>

                    <div className="flex items-center justify-center gap-7">
                        { socialNetworks.map(({ logo, src, id }) => (
                            <Link 
                                key={id} 
                                href={src} 
                                target="_blank"
                                className="transition-all duration-300 hover:text-primary"
                            >
                                { logo }
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;