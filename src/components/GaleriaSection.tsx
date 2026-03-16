import { motion } from "framer-motion";

const photos = [
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_01.jpeg", alt: "Instalação elétrica residencial pelo Sr. Luiz" },
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_02.jpeg", alt: "Quadro de força organizado pelo eletricista Luiz" },
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_03.jpeg", alt: "Troca de disjuntores e manutenção elétrica" },
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_04.jpeg", alt: "Instalação de tomadas e interruptores" },
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_05.jpeg", alt: "Serviço elétrico realizado com capricho" },
  { src: "/images/luizfalcirolli/CLIENTE_LUIZ_ELETRICISTA_06.jpeg", alt: "Atendimento elétrico profissional em domicílio" },
];

const GaleriaSection = () => (
  <section id="obras" className="py-20 md:py-28 bg-secondary/40 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trabalhos e Resultados <span className="text-gradient">do Sr. Luiz</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Fotos reais de instalações e manutenções elétricas executadas com segurança e qualidade.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="mb-4 overflow-hidden rounded-2xl bg-card border border-border shadow-sm break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;