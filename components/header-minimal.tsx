import Link from "next/link";
import Image from "next/image";
import MotionTransition from "./transition-component";

const HeaderMinimal = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5">
            <header>
                <div className="container rounded-lg bg-white/15 background-blur-sm justify-between max-w-6xl mx-auto p-4 md:flex md:p-2">
                    <Link href="/" className="flex items-center space-x-4">
                        <div className="relative w-10 h-10">
                            <Image 
                                src="/profile-photo.jpg" // Cambiado a ruta válida desde `public/`
                                alt="Foto de perfil de Arturo Victoria" 
                                className="rounded-full object-cover object-center"
                                fill // Adapta la imagen al contenedor padre
                                sizes="40px" // Indica el tamaño del contenedor
                                priority // Asegura que esta imagen sea cargada primero
                            />
                        </div>
                        <div>
                            <h1 className="text-center md:text-left">Arturo Victoria</h1>
                            <h2 className="mb-2 text-center md:text-left">
                                <span className="text-primary">Ingeniero de Software</span>
                            </h2>
                        </div>
                    </Link>
                </div>
            </header>
        </MotionTransition>
    );
};

export default HeaderMinimal;
