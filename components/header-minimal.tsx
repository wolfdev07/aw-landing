import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";


const HeaderMinimal = () => {

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5">
            <header>
                <div className="container rounded-lg bg-white/15 background-blur-sm justify-between max-w-6xl mx-auto p-4 md:flex md:p-2">
                    <Link href="/">
                        <div className="grid justify-items-center md:justify-items-start">
                            <img className="w-10 h-10 rounded-full object-cover object-center" src="./profile-photo.jpg" alt="profile photo" />
                        </div>
                        <h1 className="text-center md:text-left">
                            Arturo Victoria
                        </h1>
                        <h2 className="mb-2 text-center md:text-left">
                            <span className="text-primary"> Ingeniero de Software</span> 
                        </h2>
                    </Link>
                </div>
            </header>
        </MotionTransition>
    );
}

export default HeaderMinimal;