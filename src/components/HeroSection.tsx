import { motion } from "framer-motion";
import { MessageCircle, Check, Truck, ShieldCheck, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL, COMPANY } from "@/lib/siteConfig";

const HeroSection = () => (
  <section id="home" className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center scroll-mt-28">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
    </div>

    <div className="container relative z-10 py-16 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5 rounded-full bg-white/10 border border-white/20 px-3 py-2">
            <img
              src="/images/reboque/logo.png"
              alt="Logo LSB Reboques"
              className="w-12 h-12 rounded-full object-contain bg-white p-1 border border-white/40"
            />
            <span className="text-xs md:text-sm text-primary-foreground/90 font-medium">{COMPANY.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Truck className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            LSB Reboques | Guincho e Socorro Rodoviario 24 Horas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-2xl">
            Carro parado ou acidente? A LSB Reboques chega ate si em minutos. Atendimento rapido, seguro e com o melhor preco da regiao.
          </p>
          <p className="mb-6 text-sm font-semibold text-accent">Ligacao prioritaria para emergencias na estrada.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-[0_0_30px_-10px_rgba(251,192,45,0.8)]"
            >
              <Phone className="w-5 h-5" />
              SOLICITAR GUINCHO AGORA
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg border border-white/20 bg-white/10 text-primary-foreground font-semibold text-base hover:bg-white/15 transition-all duration-200"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_whatsapp", {
                    event_category: "lead",
                    event_label: "botao_whatsapp_hero",
                  });
                }
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
          <p className="mt-4 inline-flex items-center rounded-full bg-accent/20 border border-accent/60 px-4 py-2 text-sm font-semibold text-accent">
            Chegamos em ate 30 minutos!
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento 24h em Sao Paulo e rodovias proximas
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Guincho leve e pesado com transporte seguro
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Equipe treinada para qualquer tipo de ocorrencia
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Preco combinado antes da saida do guincho
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
        >
          <div className="bg-gradient-to-br from-[#0d2454] to-[#1a3a6e] rounded-3xl shadow-2xl p-6 max-w-md border border-white/10">
            <div className="relative overflow-hidden rounded-2xl bg-[#0d1f3c]">
              <img
                src="/images/reboque/avatar.png"
                alt="Operador de guincho com caminhao na rodovia"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-white font-semibold text-base mb-2">"Socorro rapido e seguro em qualquer horario."</p>
              <p className="text-white/60 text-sm">Motoristas atendidos todos os dias</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-card/90 border border-accent/20 px-5 py-2 text-sm text-foreground shadow">
            <ShieldCheck className="w-4 h-4 text-accent" />
            Rapidez e seguranca quando voce mais precisa
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;