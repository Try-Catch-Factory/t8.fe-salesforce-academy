/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQi3rgfyZLU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="bg-[#F9F871]">
      <header className="flex justify-between items-center bg-[#333333] p-4 text-white">
        <h1 className="text-xl font-bold">Academia XYZ</h1>
        <h1 className="border p-2">Ir a mis cursos</h1>
        <Button className="text-white border-white" variant="outline">
          Ir a mis cursos
        </Button>
        
      </header>
      <section className="text-center p-8 grid md:grid-cols-2 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#412007]">Domina un nuevo idioma <span className="text-amber-700">desde casa</span></h2>
          <p className="mb-6 text-black">Aprender un nuevo idioma nunca ha sido tan fácil y a tu propio ritmo.</p>
          <button className="bg-black p-2">Iniciar sesión</button>
          <Button className="mb-2">Explora</Button>
          <p className="italic text-[#412007]">"¡Únete a nosotros y descubre un mundo de nuevas oportunidades!"</p>
        </div>
        <img
          alt="Language learning illustration"
          className="mx-auto mb-4 border"
          height="200"
          src="/img/placeholder.svg"
          style={{
            aspectRatio: "304/250",
            objectFit: "cover",
          }}
          width="400"
        />
      </section>
      <section className="bg-[#333333] text-white p-8 text-center">
        <div className="mb-8">
          <div className="pt-20">
          <img
              alt="profile girl"
              className="mx-auto mb-4 bg-white rounded-full"
              height="224"
              src="/img/profilegirl.svg"
              style={{
                aspectRatio: "208/208",
                objectFit: "cover",
              }}
              width="224"
            />
            <h1>Aquí va un Avatar</h1>
              <Avatar className="mx-auto mb-4">
              <AvatarImage alt="Teacher" src="/img/profilegirl.svg?height=128&width=128" />
              </Avatar>
            <h3 className="text-3xl font-bold">Profesores Nativos</h3>
            <p>¡Experimenta el aprendizaje de idiomas en su forma más pura y auténtica!</p>
          </div>
          <br />
          <div className="pt-20">
            <img
              alt="Student group"
              className="mx-auto mb-4"
              height="224"
              src="/img/team2.svg"
              style={{
                aspectRatio: "208/175",
                objectFit: "cover",
              }}
              width="208"
            />
            <h3 className="text-3xl font-bold">Inmersión total</h3>
            <p>Descubre la cultura del idioma que quieres aprender, sus dialectos y conoce nuevos amigos.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
