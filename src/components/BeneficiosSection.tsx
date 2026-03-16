import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Wallet, Truck } from "lucide-react";

const benefits = [
  { icon: Clock3, title: "Disponibilidade Total", desc: "Funcionamos 24 horas por dia, 7 dias por semana, inclusive feriados." },
  { icon: Truck, title: "Frota Moderna", desc: "Camioes novos e equipados para qualquer tipo de resgate." },
  { icon: Wallet, title: "Preco Transparente", desc: "Sem taxas surpresa. Valor combinado antes da saida do guincho." },
  { icon: ShieldCheck, title: "Equipe Treinada", desc: "Profissionais qualificados para manusear o seu veiculo com o maximo cuidado." },
];

const BeneficiosSection = () => (
  <section id="porque" className="py-20 md:py-28 bg-secondary/50 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por que escolher a <span className="text-gradient">LSB Reboques?</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 mx-auto">
              <b.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;