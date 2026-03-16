import { MessageCircle, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const DemoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 border-b border-accent/25 backdrop-blur-sm">
      <div className="container py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent flex-shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-foreground">
              <span className="font-semibold">Atendimento com agilidade:</span> fale agora com o Sr. Áureo.
              <span className="hidden sm:inline"> Orçamento rápido para reparos e serviços residenciais.</span>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-accent hover:brightness-110 text-accent-foreground font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'demo_banner_criar_site'
                });
              }
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Pedir orçamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
