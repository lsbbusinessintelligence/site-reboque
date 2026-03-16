import { motion } from "framer-motion";

const feedbackImages = [
  { src: "/images/aureocosta/AUREOCOSTA07.jpeg", alt: "Registro de atendimento residencial 1" },
  { src: "/images/aureocosta/AUREOCOSTA08.jpeg", alt: "Registro de atendimento residencial 2" },
  { src: "/images/aureocosta/AUREOCOSTA09.jpeg", alt: "Registro de atendimento residencial 3" },
  { src: "/images/aureocosta/AUREOCOSTA10.jpeg", alt: "Registro de atendimento residencial 4" },
  { src: "/images/aureocosta/AUREOCOSTA11.jpeg", alt: "Registro de atendimento residencial 5" },
];

const FeedbacksSection = () => (
  <section id="feedbacks" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Registro de <span className="text-gradient">Atendimentos Reais</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Imagens de atendimentos executados com foco em rapidez, organização e solução do problema.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {feedbackImages.slice(0, 3).map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto w-full">
          {feedbackImages.slice(3).map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index + 3) * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeedbacksSection;
