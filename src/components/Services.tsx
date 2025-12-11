import { Sparkles, Building2, HardHat, Droplets } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Entretien',
    description: 'Offrez à votre cuisine une nouvelle fraîcheur avec notre expertise en nettoyage professionnel, pour un espace sain, sécurisé et conforme à     vos exigences.',
    image: 'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-500/90 to-blue-600/90'
  },
  {
    icon: HardHat,
    title: 'Restaurants',
    description: 'Assurez la propreté et la sécurité de votre restaurant avec notre expertise en nettoyage professionnel, pour un espace conforme aux normes     et prêt à accueillir vos clients.',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-emerald-500/90 to-teal-600/90'
  },
  {
    icon: Building2,
    title: 'Hopitaux/EHPAD',
    description: 'Offrez à vos patients et résidents un environnement sain et sécurisé grâce à notre expertise en nettoyage professionnel, conforme aux          normes d’hygiène les plus strictes.',
    image: 'https://images.pexels.com/photos/7641826/pexels-photo-7641826.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-teal-500/90 to-cyan-600/90'
  },
  {
    icon: Sparkles,
    title: 'Désinfection & Entretien',
    description: "Protocoles de désinfection renforcés. Idéal pour cuisnes d'hotels, restaurants et cuisines centrales.",
    image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-blue-500/90 to-emerald-600/90'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Des solutions complètes pour tous vos besoins en nettoyage et entretien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 group-hover:opacity-95`}></div>

                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <Icon className="h-12 w-12 mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-100 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez un besoin spécifique ?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Demandez un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  );
}
