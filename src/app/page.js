import FinishedProyects from "@/components/intro/FinishedProjects";
import Leading from "@/components/intro/Leading";
import PaddingWrapper from "@/components/wrapper/PaddingWrapper";
import Image from "next/image";
import BgHome from "@/components/BgHome";
import ContLogros from "@/components/logros/ContLogros";
import PorqueEscogernos from "@/components/porqueEscogernos/PorqueEscogernos";

export default function Home() {
  return (
    <section className="w-[full] min-h-[100vh] relative">
      <BgHome />
      <PaddingWrapper>
        <Leading />
        <FinishedProyects />
      </PaddingWrapper>
      <ContLogros />
      <PorqueEscogernos />
    </section>
  );
}
