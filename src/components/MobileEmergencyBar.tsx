import { Phone, MessageCircle } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/siteConfig";

const MobileEmergencyBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-white/15 bg-primary/95 backdrop-blur-lg">
    <div className="grid grid-cols-2 gap-2 p-2">
      <a
        href={PHONE_URL}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-bold py-3"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "click_call", {
              event_category: "lead",
              event_label: "barra_mobile_ligar",
            });
          }
        }}
      >
        <Phone className="w-4 h-4" />
        LIGAR AGORA
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white font-bold py-3"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "click_whatsapp", {
              event_category: "lead",
              event_label: "barra_mobile_whatsapp",
            });
          }
        }}
      >
        <MessageCircle className="w-4 h-4" />
        WHATSAPP
      </a>
    </div>
  </div>
);

export default MobileEmergencyBar;