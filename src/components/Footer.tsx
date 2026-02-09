const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Sintomas", href: "#sintomas" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Método", href: "#metodo" },
  { label: "Jornada", href: "#jornada" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-serif text-lg font-semibold text-foreground block mb-1">
              Dra. Claudia Almeida
            </span>
            <span className="font-sans text-xs text-muted-foreground">
              Autoconhecimento, Saúde & Bem-estar
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="font-sans text-xs text-muted-foreground/60">
            © 2026 Dra. Claudia Almeida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
