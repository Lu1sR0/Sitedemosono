import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    role: "Empresária, 52 anos",
    text: "Depois de anos sofrendo com insônia e bruxismo, encontrei na Dra. Claudia o acolhimento e a competência que eu precisava. Hoje durmo bem e acordo sem dor. Mudou minha vida.",
    rating: 5,
    initials: "MF",
  },
  {
    name: "Roberto C.",
    role: "Executivo, 47 anos",
    text: "O burnout estava destruindo meu sono e minha saúde. O tratamento integrado da Dra. Claudia me devolveu o equilíbrio. A abordagem dela é única — ciência com humanidade.",
    rating: 5,
    initials: "RC",
  },
  {
    name: "Ana Paula M.",
    role: "Professora, 39 anos",
    text: "Sofria com dores orofaciais há mais de 5 anos. Em poucas sessões já senti uma melhora significativa. A Dra. Claudia realmente escuta e entende o paciente.",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Carlos Eduardo T.",
    role: "Advogado, 55 anos",
    text: "Fui diagnosticado com apneia do sono e DTM. O plano personalizado da Dra. Claudia transformou minhas noites e meus dias. Recomendo de olhos fechados.",
    rating: 5,
    initials: "CE",
  },
  {
    name: "Juliana R.",
    role: "Médica, 43 anos",
    text: "Como profissional de saúde, valorizo muito a base científica sólida da Dra. Claudia. O diferencial é a integração mente-corpo no tratamento. Resultados reais.",
    rating: 5,
    initials: "JR",
  },
  {
    name: "Fernando L.",
    role: "Engenheiro, 61 anos",
    text: "Minha esposa e eu fomos atendidos pela Dra. Claudia. Os dois tivemos resultados incríveis no tratamento do bruxismo. Profissional excepcional.",
    rating: 5,
    initials: "FL",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-5 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-[1.15] mb-4 text-balance">
            O que dizem nossos pacientes
          </h2>
          <p className="font-sans text-muted-foreground">
            Histórias reais de transformação e qualidade de vida.
          </p>
        </motion.div>

        {/* Desktop: Masonry-like grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-background rounded-2xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <Quote className="h-9 w-9 text-primary/12 mb-5 group-hover:text-primary/20 transition-colors" />
              <p className="font-sans text-[0.94rem] text-muted-foreground leading-relaxed flex-1 mb-7">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary/60 text-primary/60" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-sans text-xs font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel with auto-advance */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-background rounded-2xl p-8 border border-border/40 shadow-lg"
          >
            <Quote className="h-8 w-8 text-primary/15 mb-5" />
            <p className="font-sans text-[0.94rem] text-muted-foreground leading-relaxed mb-6">
              "{testimonials[activeIndex].text}"
            </p>
            <div className="flex items-center gap-1.5 mb-4">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary/60 text-primary/60" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-sans text-xs font-bold text-primary">{testimonials[activeIndex].initials}</span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border w-2.5 hover:bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
