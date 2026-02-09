import { motion } from "framer-motion";
import { Microscope, HandHeart, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import selfcareImg from "@/assets/selfcare.jpg";

const pillars = [
  {
    icon: Microscope,
    title: "Ciência",
    description:
      "Protocolos baseados em evidências científicas atualizadas e tecnologia de ponta para resultados reais.",
    color: "bg-sky",
  },
  {
    icon: GraduationCap,
    title: "Experiência",
    description:
      "Mais de três décadas de prática clínica, milhares de pacientes tratados e aprendizado contínuo.",
    color: "bg-warm",
  },
  {
    icon: HandHeart,
    title: "Cuidado humano",
    description:
      "Cada paciente é único. O tratamento é individualizado, acolhedor e construído com empatia.",
    color: "bg-sky",
  },
  {
    icon: Sparkles,
    title: "Integração mente & corpo",
    description:
      "Autoconhecimento e abordagem integrativa que conecta corpo, mente e comportamento.",
    color: "bg-warm",
  },
];

const Methodology = () => {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left heading - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-5 block">
              Método
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] mb-5 text-balance">
              Uma metodologia que une ciência, experiência e cuidado humano.
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Quatro pilares que guiam cada etapa do seu tratamento, garantindo
              resultados sustentáveis e qualidade de vida.
            </p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block rounded-2xl overflow-hidden shadow-lg mb-8"
            >
              <img
                src={selfcareImg}
                alt="Autocuidado e bem-estar"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 gap-3 font-sans font-medium h-14 border-2 border-foreground/15 text-foreground hover:bg-foreground/5"
                asChild
              >
                <a href="#sobre">
                  Conheça a Dra. Claudia
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right pillars - 3 cols */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-background rounded-2xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}
                >
                  <pillar.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
