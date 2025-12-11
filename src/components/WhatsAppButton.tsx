import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33659948300"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Besoin d'aide ?
      </span>
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></div>
    </a>
  );
}
