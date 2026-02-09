import { motion } from "framer-motion";
import draClaudia from "@/assets/dra-claudia.png";

const stats = [
  { value: "+35", label: "anos de experiência clínica" },
  { value: "+10.000", label: "pacientes atendidos" },
  { value: "360°", label: "abordagem integrativa" },
];

const Authority = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background shape */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -top-6 -left-6 w-full h-full bg-primary/5 rounded-[2rem] -rotate-3"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
                <img
                  src={draClaudia}
                  alt="Dra. Claudia Almeida - Especialista em Sono e Dor Orofacial"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border/40 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <span className="font-serif text-2xl md:text-3xl font-semibold text-primary block mb-1">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] text-muted-foreground leading-tight block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-xs font-sans font-semibold text-primary tracking-[0.2em] uppercase mb-5 block">
              Sobre a Dra. Claudia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] mb-6 text-balance">
              Mais de 35 anos promovendo saúde e bem-estar com ciência e humanidade.
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Sou mentora e consultora de saúde e bem-estar pessoal e corporativo.
                Minha missão é ajudar a aliviar dores, bruxismo e insônia com
                tratamento individualizado que integra mente e corpo.
              </p>
              <p>
                Com uma abordagem que une autoconhecimento, ciência e acolhimento,
                cada paciente recebe um plano de cuidado único, construído para
                transformar sua qualidade de vida de forma profunda e duradoura.
              </p>
            </div>

            {/* Signature touch */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pt-8 border-t border-border/40"
            >
              <blockquote className="font-serif text-lg italic text-foreground/80 leading-relaxed">
                "Cada paciente é único. O tratamento deve respeitar o ritmo do corpo e da mente."
              </blockquote>
              <p className="font-sans text-sm text-primary font-medium mt-3">
                — Dra. Claudia Almeida
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
