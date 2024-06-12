/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sQi3rgfyZLU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/*
'use client'
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  // const isClient = typeof window !== "undefined";
  // const { user, error, isLoading } = isClient ? useUser() : { user: null, error: null, isLoading: false };
  const { user, error, isLoading } = useUser();
  return (
    <div className="">
      <header className="px-10 sm:px-20 pt-5 bg-pyellow-200 flex justify-between items-center  text-white ">
        <h1 className="text-sm sm:text-2xl font-bold text-pyellow-950">Academia XYZ</h1>
        {!isLoading && !user && (
          <Button asChild className="text-sm sm:text-xl" variant="outline" >
            <a href="/api/auth/login">Login</a>
          </Button>
        )}
        {user && (
          <Button asChild className="text-sm sm:text-xl" variant="outline" >
            <a href="/api/auth/logout">Logout</a>
          </Button>
        )}
      </header>
      <section className="bg-pyellow-200 p-10 sm:p-20 h-screen grid md:grid-cols-2 overflow-auto items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-pyellow-950 text-balance">Domina un nuevo idioma <span className="text-pyellow-600">desde casa</span></h1>
          <br/>
          <p className="text-xl sm:text-3xl text-black ">Aprender un nuevo idioma nunca ha sido tan fácil y a tu propio ritmo.</p>
          <br />
          <div className="flex justify-center">
            <Button className="text-sm sm:text-xl">Explora</Button>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            alt="Language learning illustration"
            className=""
            height="368"
            src="/img/laptop.png"
            style={{
              aspectRatio: "184/173",
              objectFit: "cover",
            }}
            width="346"
          />
        </div>
      </section>
      <section className="px-10 sm:px-20 bg-pyellow-600 h-screen text-white  grid md:grid-cols-2 items-center">
        <div className="">
        <img
            alt="profile girl"
            className=""
            height="368"
            src="/img/profe.png"
            style={{
              aspectRatio: "",
              objectFit: "cover",
            }}
            width="405"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold">Profesores Nativos</h2>
          <br />
          <p className="text-xl sm:text-3xl">¡Experimenta el aprendizaje de idiomas en su forma más pura y auténtica!</p>
        </div>
    </section>
    <div className="linear-gradient('bg-pyellow-600','bg-pyellow-200')"></div>
      <section className="bg-pyellow-200 px-10 sm:px-20 h-screen text-pyellow-950 grid md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold">Inmersión total</h2>
          <br />
          <p className="text-xl sm:text-3xl">Descubre la cultura del idioma que quieres aprender, sus dialectos y conoce nuevos amigos.</p>
        </div>
        <div className="flex justify-end">
          <img
            alt="Student group"
            className=""
            height="368"
            src="/img/inmersion.png"
            style={{
              aspectRatio: "23/25",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </section>
    </div>
  )
}
*/

'use client'
import React from "react";
import Header from "@/components/Header/Header";
import HomeSection from "@/components/Sections/HomeSection";
import NativeTeachersSection from "@/components/Sections/NativeTeachersSection";
import TotalImmersionSection from "@/components/Sections/TotalImmersionSection";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <NativeTeachersSection />
      <TotalImmersionSection />
    </div>
  );
}

export default Home;
