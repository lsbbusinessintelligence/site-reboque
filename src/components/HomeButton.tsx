import { Home } from "lucide-react";

const HomeButton = () => {
  return (
    <a
      href="https://www.lsbintelligence.com.br"
      className="fixed top-20 left-4 z-50 flex items-center justify-center w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group border border-gray-200"
      title="Voltar para LSB Intelligence"
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click_home', {
            event_category: 'navigation',
            event_label: 'return_to_main_site'
          });
        }
      }}
    >
      <Home className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
    </a>
  );
};

export default HomeButton;
