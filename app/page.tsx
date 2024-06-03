/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQi3rgfyZLU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div>
      <header className=" bg-white flex justify-between items-center p-4 text-white">
        <h1 className="text-xl font-bold text-pyellow-950">Academia XYZ</h1>
        <Button variant="outline" >
          Ir a mis cursos
        </Button>
        
      </header>
      <section className="bg-pyellow-200 h-screen text-center p-8 grid md:grid-cols-2 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-pyellow-950">Domina un nuevo idioma <span className="text-pyellow-600">desde casa</span></h2>
          <p className="mb-6 text-black">Aprender un nuevo idioma nunca ha sido tan fácil y a tu propio ritmo.</p>
          <Button className="mb-2">Explora</Button>
          <p className="italic text-[#412007]">"¡Únete a nosotros y descubre un mundo de nuevas oportunidades!"</p>
        </div>
        <img
          alt="Language learning illustration"
          className="mx-auto mb-4  bg-300"
          height="200"
          src="/img/laptop.png"
          style={{
            aspectRatio: "250/250",
            objectFit: "cover",
          }}
          width="400"
        />
      </section>
      <section className=" bg-pyellow-600 h-screen text-white p-8 text-center">
        
          <div className="pt-20">
          <img
              alt="profile girl"
              className="mx-auto mb-4 "
              height="250"
              src="/img/profe.png"
              style={{
                aspectRatio: "250/275",
                objectFit: "cover",
              }}
              width="250"
            />
            <h3 className="text-3xl font-bold">Profesores Nativos</h3>
            <p>¡Experimenta el aprendizaje de idiomas en su forma más pura y auténtica!</p>
          </div>
          <br />
      </section>
      <section className="bg-pyellow-200 p-8 text-center  text-pyellow-950">
          <div className="pt-20 ">
            <img
              alt="Student group"
              className="mx-auto mb-4"
              height="300"
              src="/img/inmersion.png"
              style={{
                aspectRatio: "200/217",
                objectFit: "cover",
              }}
              width="340"
            />
            <h3 className="text-3xl font-bold">Inmersión total</h3>
            <p>Descubre la cultura del idioma que quieres aprender, sus dialectos y conoce nuevos amigos.</p>
          </div>
          </section>
      
    </div>
  )
}
