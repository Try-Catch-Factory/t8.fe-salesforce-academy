'use client'

const NativeTeachersSection: React.FC = () => {
  return (
    <section className="px-10 sm:px-20 bg-pyellow-600 h-screen text-white grid md:grid-cols-2 items-center">
      <div>
        <img
          alt="profile girl"
          height="368"
          src="/img/profe.png"
          style={{ aspectRatio: "", objectFit: "cover" }}
          width="405"
        />
      </div>
      <div>
        <h2 className="text-3xl sm:text-6xl font-bold">Profesores Nativos</h2>
        <br />
        <p className="text-xl sm:text-3xl">¡Experimenta el aprendizaje de idiomas en su forma más pura y auténtica!</p>
      </div>
    </section>
  );
}

export default NativeTeachersSection;
