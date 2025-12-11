import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '+33659948300';
  const whatsappNumber = '33659948300';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-cyan-900/85 to-emerald-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Votre Partenaire Propreté
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              et Rénovation en France
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Nettoyage professionnel et écologique sur toute la France.
            <br />
            Des prestations de qualité pour entreprises et particuliers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex items-center space-x-3 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>Appelez-nous</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Intervention rapide</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Devis gratuit 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Produits écologiques</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
