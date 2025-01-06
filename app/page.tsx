import Image from "next/image";
import Header from "@/components/header";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction"; // Ajusté el nombre para evitar posibles errores tipográficos.

export default function Home() {
  return (
    <main>
      <Header>
        <div className="relative w-24 h-24">
          <Image 
            className="rounded-full object-cover object-center" 
            src="/profile-photo.jpg" // Cambié a una ruta válida desde `public/`
            alt="Foto de perfil" 
            fill // Ajusta la imagen al contenedor
            sizes="96px" // Tamaño del contenedor en Tailwind (24x4)
            priority // Para cargar la imagen lo antes posible
          />
        </div>
      </Header>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Introduction />
      </div>
    </main>
  );
}
