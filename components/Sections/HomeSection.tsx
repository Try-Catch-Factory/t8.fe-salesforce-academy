'use client'
import { Button } from "@/components/ui/button";

const HomeSection: React.FC = () => {
  return (
    <section className="p-10 sm:p-20 h-screen grid md:grid-cols-2 overflow-auto items-center">
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-pyellow-950 text-balance">
          Domina un nuevo idioma <span className="text-pyellow-600">desde casa</span>
        </h1>
        <br />
        <p className="text-xl sm:text-3xl text-black">Aprender un nuevo idioma nunca ha sido tan fácil y a tu propio ritmo.</p>
        <br />
        <div className="flex justify-center">
          <Button className="text-sm sm:text-xl">Explora</Button>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          alt="Language learning illustration"
          height="368"
          src="/img/laptop.png"
          style={{ aspectRatio: "184/173", objectFit: "cover" }}
          width="346"
        />
      </div>
    </section>
  );
}

export default HomeSection;
