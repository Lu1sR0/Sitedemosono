import { motion } from "framer-motion";
import { Moon, Zap, Frown, Brain, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Moon,
    title: "Distúrbios do sono",
    description:
      "Diagnóstico e tratamento de insônia, apneia, síndrome das pernas inquietas e outros transtornos que roubam seu descanso.",
    tag: "Sono",
  },
  {
    icon: Zap,
    title: "Bruxismo e DTM",
    description:
      "Avaliação completa e tratamento da disfunção temporomandibular e bruxismo do sono e vigília, com abordagem integrativa.",
    tag: "Orofacial",
  },
  {
    icon: Frown,
    title: "Dor orofacial",
    description:
      "Investigação e tratamento de dores crônicas na face, cabeça e região orofacial, unindo ciência e cuidado humano.",
    tag: "Dor crônica",
  },
  {
    icon: Brain,
    title: "Burnout, ansiedade e sono",
    description:
      "Abordagem integrada para o ciclo de esgotamento, ansiedade e insônia — restaurando o equilíbrio entre mente e corpo.",
    tag: "Mente & corpo",
  },
];

const Services = () => {
  return (
    <section id="tratamentos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left heading - sticky */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-5 block">
              Tratamentos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] mb-5 text-balance">
              Áreas de atuação especializadas
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Tratamentos personalizados com abordagem integrativa que conecta mente e corpo.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="rounded-full px-10 gap-3 font-sans font-semibold h-14 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors"
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-primary/60 bg-primary/5 px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
