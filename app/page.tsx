import CoverParticles from "@/components/cover-particles";
import Header from "@/components/header";
import TransitionPage from "@/components/transition-page";
import Intruduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <Header>
          <img className="w-24 h-24 rounded-full object-cover object-center" src="./profile-photo.jpg" alt="profile photo" />
      </Header>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Intruduction />
      </div>
    </main>
  );
}
