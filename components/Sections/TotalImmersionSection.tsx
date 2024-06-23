'use client'

const TotalImmersionSection: React.FC = () => {
  return (
    <section className="bg-pyellow-200 px-10 sm:px-20 h-screen text-pyellow-950 grid md:grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl sm:text-6xl font-bold">Inmersión total</h2>
        <br />
        <p className="text-xl sm:text-3xl">Descubre la cultura del idioma que quieres aprender, sus dialectos y conoce nuevos amigos.</p>
      </div>
      <div className="flex justify-end">
        <img
          alt="Student group"
          height="368"
          src="/img/inmersion.png"
          style={{ aspectRatio: "23/25", objectFit: "cover" }}
          width="400"
        />
      </div>
    </section>
  );
}

export default TotalImmersionSection;
