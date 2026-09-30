const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16" aria-label="Navegação principal">
        <a className="text-sm font-semibold tracking-[-0.02em] transition-opacity hover:opacity-60" href="#inicio">MSC.</a>
        <ul className="flex items-center gap-4 text-xs font-medium sm:gap-7 sm:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition-opacity hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
