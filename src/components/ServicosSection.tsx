import { motion } from "framer-motion";
import { Truck, BatteryCharging, Wrench, KeyRound, Fuel } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Guincho Leve e Pesado",
    desc: "Transporte seguro para carros, motas, carrinhas e camioes com total cuidado no carregamento e deslocamento.",
  },
  {
    icon: BatteryCharging,
    title: "Auxilio de Partida (Pane Eletrica)",
    desc: "Bateria descarregada? Resolvemos no local para voce voltar a rodar sem complicacao.",
  },
  {
    icon: Wrench,
    title: "Troca de Pneus",
    desc: "Auxilio rapido para furos ou pneus danificados em qualquer ponto da cidade ou da rodovia.",
  },
  {
    icon: KeyRound,
    title: "Abertura de Veiculos",
    desc: "Esqueceu a chave dentro do carro? Abrimos sem danificar o veiculo com tecnica profissional.",
  },
  {
    icon: Fuel,
    title: "Pane Seca",
    desc: "Levamos combustivel ate si para que possa seguir viagem com seguranca e agilidade.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Solucoes emergenciais para socorro rodoviario, com atendimento rapido e equipe especializada.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;