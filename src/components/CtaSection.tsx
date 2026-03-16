import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY, WHATSAPP_URL, PHONE_URL } from "@/lib/siteConfig";

const CtaSection = () => (
  <section id="contato" className="hero-gradient py-20 md:py-28 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Precisa de socorro rodoviario agora?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          {COMPANY.slogan} Ligue agora e receba atendimento de emergencia com deslocamento imediato.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg border border-white/20 bg-white/10 text-primary-foreground font-semibold text-lg hover:bg-white/15 transition-all duration-200"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "click_whatsapp", {
                  event_category: "lead",
                  event_label: "botao_whatsapp_cta",
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;