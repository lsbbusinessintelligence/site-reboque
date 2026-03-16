import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/siteConfig";

const FloatingWhatsApp = () => {
  return (
    <motion.div
      className="fixed bottom-20 md:bottom-6 right-3 md:right-6 z-50 flex items-center gap-2 md:gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 sm:h-14 min-w-[116px] sm:min-w-[126px] rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 px-4 animate-pulse"
        title="Falar no WhatsApp"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'click_whatsapp', {
              event_category: 'lead',
              event_label: 'botao_whatsapp_flutuante'
            });
          }
        }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>

      <a
        href={PHONE_URL}
        className="h-12 sm:h-14 min-w-[116px] sm:min-w-[126px] rounded-full bg-accent hover:brightness-110 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 px-4"
        title="Ligar agora"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'click_call', {
              event_category: 'lead',
              event_label: 'botao_ligacao_flutuante'
            });
          }
        }}
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold text-sm">Ligar</span>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp;