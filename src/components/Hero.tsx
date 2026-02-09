import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import imagemcacordando from "/imagemcacordando.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
          <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={imagemcacordando}
          alt="Pessoa acordando, representando sono e bem-estar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />

      </div>

      {/* Animated ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[20%] w-[400px] h-[400px] rounded-full bg-sky/30 blur-[120px] opacity-40"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-[350px] h-[350px] rounded-full bg-warm/40 blur-[100px] opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-32 md:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-8 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10 backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              Autoconhecimento, Saúde & Bem-estar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-foreground leading-[1.08] tracking-tight text-balance mb-7"
          >
            Sono, saúde e qualidade de vida —{" "}
            <motion.span
              initial={{ backgroundSize: "0% 3px" }}
              animate={{ backgroundSize: "100% 3px" }}
              transition={{ duration: 1.2, delay: 1 }}
              className="text-primary italic bg-gradient-to-r from-primary/20 to-primary/5 bg-no-repeat bg-bottom"
            >
              no ritmo do seu corpo.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12"
          >
            Ajudo a aliviar dores, bruxismo e insônia com tratamento individualizado
            que integra mente e corpo — unindo ciência, acolhimento e mais de 35
            anos de experiência clínica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-start gap-5"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="rounded-full px-12 gap-3 font-sans font-semibold h-[3.75rem] text-[1.05rem] shadow-xl shadow-primary/25"
                asChild
              >
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 font-sans font-medium h-[3.75rem] text-[1.05rem] border-2 border-foreground/15 text-foreground hover:bg-foreground/5 backdrop-blur-sm"
                asChild
              >
                <a href="#metodo">Como funciona</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 flex items-center gap-8 md:gap-14 text-muted-foreground/60"
          >
            {[
              "+35 anos de experiência",
              "Tratamento individualizado",
              "Integração mente & corpo",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                className={`${i > 0 ? "hidden sm:flex" : "flex"} ${i > 1 ? "hidden md:flex" : ""} items-center gap-2.5 text-xs font-sans tracking-wide uppercase`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-foreground/15 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
