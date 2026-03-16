import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const testimonials = [
  {
    name: "Carlos Mendes",
    text: "Fiquei parado na rodovia as 2 da manha e eles chegaram em 20 minutos. Servico nota 10 e preco justo!",
  },
  {
    name: "Ana Paula",
    text: "Muito atenciosos. Tive um pneu furado numa zona perigosa e o socorro foi imediato. Recomendo muito!",
  },
  {
    name: "Roberto Silva",
    text: "O melhor servico de reboque da regiao. O caminhao era novo e o motorista foi muito cuidadoso com o meu carro.",
  },
];

const TestimonialsSection = () => (
  <section id="avaliacoes" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Depoimentos de <span className="text-gradient">Quem Ja Foi Socorrido</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Prova social para quem precisa confiar no atendimento em um momento de emergencia.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 font-semibold text-foreground">
            <span className="text-yellow-500">★★★★★</span>
            Atendimento 5 estrelas
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-muted-foreground">
            Motoristas atendidos com seguranca e rapidez
          </span>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm card-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">{item.name}</div>
              <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                <BadgeCheck className="w-4 h-4" />
                Verificado
              </span>
            </div>
            <div className="mb-3 text-yellow-500">★★★★★</div>
            <p className="text-muted-foreground text-sm">"{item.text}"</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "click_whatsapp", {
                event_category: "lead",
                event_label: "botao_whatsapp_depoimentos",
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Quero atendimento agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;