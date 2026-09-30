function Hero() {
  return (
    <section id="inicio" className="flex min-h-screen items-center px-6 pt-24 sm:px-10 lg:px-16" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-7xl py-20 sm:py-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] sm:mb-8">Desenvolvimento de Software · Front-end</p>
        <h1 id="hero-title" className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-8xl xl:text-9xl">Marlon Santos Carvalho</h1>
        <div className="mt-10 max-w-xl sm:mt-14">
          <p className="text-base leading-relaxed tracking-[-0.015em] sm:text-lg">Estudante de Sistemas de Informação no IFBA e desenvolvedor com foco em interfaces e aplicações web.</p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <a className="inline-flex items-center justify-center bg-black px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" href="#projetos">Ver projetos</a>
            <a className="inline-flex items-center justify-center border border-black px-5 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" href="#contato">Contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
