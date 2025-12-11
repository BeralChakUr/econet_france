import { Droplet, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">
                RESEAU <span className="text-cyan-500">ECONET FRANCE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-light leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en nettoyage,
              entretien et rénovation professionnels en France. Engagement
              écologique et qualité garantie.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Entretien
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hopitaux/EHPAD
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Désinfection
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+33659948300"
                  className="hover:text-emerald-400 transition-colors"
                >
                  06 59 94 83 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:sas.econet@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  sas.econet@gmail.com
                </a>
              </li>
              <li className="text-gray-400">92400 Courbevoie, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} RESEAU ECONET FRANCE. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
