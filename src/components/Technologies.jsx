const technologyGroups = [
  {
    number: '01',
    title: 'Front-end',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Ferramentas',
    technologies: ['Git', 'GitHub', 'Docker'],
  },
  {
    number: '03',
    title: 'Em aprendizado',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Bancos de dados'],
  },
]

const technologyGridStyles = `
  .technology-groups {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    .technology-groups {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .technology-groups {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`

function Technologies() {
  return (
    <section id="technologies" className="ds-section scroll-mt-20 bg-white text-black" aria-labelledby="technologies-title">
      <style>{technologyGridStyles}</style>
      <div className="ds-container">
        <header className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">Tecnologias</p>
          <h2 id="technologies-title" className="ds-h1">
            Ferramentas que uso<br />
            para construir.
          </h2>
        </header>

        <div className="technology-groups mt-20 gap-x-12 gap-y-12 border-t border-black pt-10 sm:mt-28 sm:pt-14 lg:gap-x-16">
          {technologyGroups.map((group) => (
            <article key={group.number}>
              <p className="text-sm font-semibold tracking-[0.18em]">{group.number}</p>
              <h3 className="ds-h3 mt-5 uppercase">{group.title}</h3>
              <div className="mt-7 border-t border-black" />
              <ul className="mt-7 space-y-3 text-lg font-medium tracking-[-0.025em] sm:text-xl">
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
