import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import imagemcacordando from "/imagemcacordando.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[120vh] overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={imagemcacordando}
          alt="Pessoa acordando, representando sono e bem-estar"
          className="w-full h-full object-cover"
        />
        {/* Multiple gradient overlays for editorial effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated ambient accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[15%] w-[500px] h-[500px] rounded-full bg-sky/20 blur-[140px] opacity-30"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-[5%] w-[450px] h-[450px] rounded-full bg-warm/30 blur-[130px] opacity-25"
        />
      </div>

      {/* Main content grid - Editorial layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column - Main narrative */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow text */}
            <motion.div variants={itemVariants}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-6">
                → A jornada da qualidade de vida começa aqui
              </p>
            </motion.div>

            {/* Main headline - Emotional narrative */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground font-semibold max-w-2xl">
                Você acorda{" "}
                <motion.span
                  initial={{ backgroundSize: "0% 4px" }}
                  animate={{ backgroundSize: "100% 4px" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="italic text-primary bg-gradient-to-r from-primary/30 to-primary/5 bg-no-repeat bg-bottom"
                >
                  cansado.
                </motion.span>
              </h1>
            </motion.div>

            {/* Subheadline - Emotional journey */}
            <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
              <p className="font-serif text-2xl text-muted-foreground leading-snug italic">
                Seu dia começa pesado.
              </p>
              <p className="font-serif text-2xl text-muted-foreground leading-snug italic">
                Sua noite nunca parece suficiente.
              </p>
            </motion.div>

            {/* Separator */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="h-1 w-12 bg-primary/40" />
            </motion.div>

            {/* Resolution paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Essa realidade pode mudar. Com abordagem que une ciência, acolhimento e mais de 35 anos de expertise clínica, ajudo você a transformar seu sono — e sua vida.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="rounded-full px-14 gap-3 font-sans font-semibold h-14 text-[1.05rem] shadow-lg shadow-primary/30 bg-primary hover:bg-primary"
                  asChild
                >
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                    Agendar consulta
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-14 font-sans font-medium h-14 text-[1.05rem] border-2 border-foreground/20 text-foreground hover:bg-foreground/5"
                  asChild
                >
                  <a href="#metodo">Como funciona</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Authority card (floating) */}
          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="sticky top-32 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] backdrop-blur-md border border-foreground/10 rounded-2xl p-8 lg:p-10 shadow-2xl shadow-primary/5"
            >
              {/* Authority badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                Certificado & Experiente
              </div>

              {/* Stats */}
              <div className="space-y-7">
                <motion.div variants={itemVariants} className="pb-6 border-b border-foreground/10">
                  <p className="font-serif text-5xl font-bold text-primary mb-2">35+</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Anos de experiência clínica especializada em sono e bem-estar
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    O que oferecemos:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Diagnóstico profundo e personalizado",
                      "Tratamento integrado mente & corpo",
                      "Abordagem científica e humanizada",
                      "Suporte contínuo à sua jornada",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-1 w-12 bg-primary/30 mt-8 origin-left"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium">Saber mais</span>
          <div className="w-6 h-10 border-2 border-foreground/15 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
