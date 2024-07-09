'use client'
import { Button } from "@/components/ui/button";

const HomeSection: React.FC = () => {
  return (
    <section className="p-10 sm:p-20 h-screen grid md:grid-cols-2 overflow-auto items-center">
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-black text-balance">
          Domina un nuevo idioma <span className="textgray">desde casa</span>
        </h1>
        <br />
        <br />
        <br />
        <p className="text-xl sm:text-3xl text-black">Aprende idiomas de manera efectiva, a tu propio ritmo.</p>
        <br />
        <div className="flex justify-center">
          
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
