function About() {
  return (
    <section id="about" className="relative bg-black text-white" aria-labelledby="about-title">
      <span id="sobre" className="absolute -top-20" aria-hidden="true" />

      <div className="ds-container ds-section py-24 pb-32 sm:py-32 sm:pb-40 lg:py-40 lg:pb-48">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.18em]">Sobre</p>
            <h2 id="about-title" className="ds-h1 !max-w-none !text-white">
              Desenvolvo interfaces<br />
              pensadas para pessoas.
            </h2>
          </div>

          <div className="max-w-lg lg:col-span-4 lg:pt-36">
            <p className="text-lg leading-relaxed tracking-[-0.015em] sm:text-xl">
              Sou estudante de Sistemas de Informação no IFBA, com experiência prática no desenvolvimento de interfaces e aplicações web.
            </p>
            <p className="mt-8 text-base leading-relaxed tracking-[-0.015em] sm:text-lg">
              Meu foco está em transformar problemas e necessidades reais em experiências digitais claras, funcionais e bem estruturadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
