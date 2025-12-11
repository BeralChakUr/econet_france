import { Leaf, Clock, FileText } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Écologique',
    description: 'Nous utilisons uniquement des produits certifiés écologiques, respectueux de l\'environnement et de votre santé.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Clock,
    title: 'Intervention Rapide',
    description: 'Disponibles 7j/7 avec des délais d\'intervention courts. Votre satisfaction est notre priorité.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    icon: FileText,
    title: 'Devis Gratuit',
    description: 'Recevez votre devis détaillé sous 24h, sans engagement. Transparence totale sur nos tarifs.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir Econet ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            L'excellence au service de votre propreté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre espace ?
          </h3>
          <p className="text-xl mb-8 opacity-90 font-light">
            Rejoignez nos clients satisfaits en Guadeloupe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Obtenir mon devis gratuit
            </button>
            <a
              href="tel:+590690123456"
              className="bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
