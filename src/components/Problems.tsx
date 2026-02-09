import { motion } from "framer-motion";
import { Moon, Frown, Zap, Brain, HeartCrack, BatteryLow } from "lucide-react";
import wellnessAbstract from "@/assets/wellness-abstract.jpg";

const symptoms = [
  {
    icon: Moon,
    title: "Insônia",
    description: "Dificuldade para adormecer ou manter o sono durante a noite, prejudicando o descanso.",
  },
  {
    icon: Frown,
    title: "Sono não reparador",
    description: "Acordar cansado mesmo após horas de sono, sem sensação de renovação.",
  },
  {
    icon: HeartCrack,
    title: "Dor orofacial",
    description: "Dores persistentes na face, mandíbula, cabeça ou região temporal.",
  },
  {
    icon: Zap,
    title: "Bruxismo",
    description: "Ranger ou apertar os dentes de forma involuntária durante o sono ou vigília.",
  },
  {
    icon: Brain,
    title: "Burnout e ansiedade",
    description: "Esgotamento emocional e preocupação excessiva que impactam o sono e o corpo.",
  },
  {
    icon: BatteryLow,
    title: "Cansaço constante",
    description: "Fadiga persistente que afeta sua produtividade e qualidade de vida.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

const Problems = () => {
  return (
    <section id="sintomas" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] pointer-events-none">
        <img src={wellnessAbstract} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left heading with image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-5 block">
              Você se identifica?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-[1.15] mb-4 text-balance">
              Sinais de que seu corpo está pedindo atenção
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Reconhecer os sintomas é o primeiro passo para transformar sua qualidade de vida.
            </p>

            {/* Decorative image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={wellnessAbstract}
                alt="Wellness e equilíbrio"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Symptom cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {symptoms.map((symptom, i) => (
              <motion.div
                key={symptom.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-7 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors"
                >
                  <symptom.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {symptom.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {symptom.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
