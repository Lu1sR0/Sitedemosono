import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import calmSky from "@/assets/calm-sky.jpg";

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] p-12 md:p-20 lg:p-24 overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img src={calmSky} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/8 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-foreground/5 blur-[80px]" />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-foreground/5 blur-[60px]"
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-primary-foreground/60 tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
              Comece agora
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-primary-foreground mb-7 text-balance leading-[1.1]">
              Sua saúde merece atenção, cuidado e excelência.
            </h2>
            <p className="font-sans text-primary-foreground/70 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
              Dê o primeiro passo para transformar sua qualidade de vida.
              Agende sua consulta e descubra um tratamento feito para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="rounded-full px-12 gap-3 font-sans font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-[3.75rem] text-[1.05rem] shadow-xl"
                  asChild
                >
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Agendar via WhatsApp
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-12 gap-3 font-sans font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-[3.75rem] text-[1.05rem] border-2 border-primary-foreground/20"
                  asChild
                >
                  <a href="mailto:contato@draclaudialmeida.com.br">
                    Fale conosco
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
