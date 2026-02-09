import { motion } from "framer-motion";
import { ClipboardList, Search, FileText, HeartPulse, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Avaliação clínica completa",
    description: "Anamnese detalhada, exame físico e análise profunda do histórico para compreender a real origem do problema.",
  },
  {
    icon: Search,
    step: "02",
    title: "Diagnóstico estratégico",
    description: "Exames complementares e análise baseada em evidências científicas para definir o caminho ideal.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Plano terapêutico personalizado",
    description: "Protocolo exclusivo, integrando mente e corpo, totalmente adaptado às suas necessidades.",
  },
  {
    icon: HeartPulse,
    step: "04",
    title: "Acompanhamento contínuo",
    description: "Monitoramento próximo, ajustes estratégicos e suporte constante para resultados duradouros.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Journey = () => {
  return (
    <section
      id="jornada"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-sans font-semibold text-primary tracking-[0.25em] uppercase mb-5 block">
            Jornada do paciente
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Um processo claro, humano e estratégico
          </h2>

          <p className="font-sans text-muted-foreground text-base md:text-lg">
            Cada etapa foi pensada para proporcionar segurança, clareza e resultados reais desde o primeiro contato.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid md:grid-cols-4 gap-6"
        >
          {/* Linha de conexão */}
          <div className="hidden md:block absolute top-[58px] left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative bg-card/90 backdrop-blur rounded-2xl p-8 border border-border/40 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Step */}
              <span className="absolute -top-3 right-4 font-serif text-7xl font-bold text-primary/5 select-none">
                {step.step}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 shadow-xl shadow-primary/25 group-hover:scale-110 transition-transform">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug">
                {step.title}
              </h3>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button
              size="lg"
              className="h-14 px-12 rounded-full font-sans font-medium gap-3 bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/30"
              asChild
            >
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                Iniciar minha jornada
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
