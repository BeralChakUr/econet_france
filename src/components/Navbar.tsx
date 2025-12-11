import { Droplet, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Droplet className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">
              RESEAU <span className="text-cyan-600">ECONET FRANCE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Pourquoi Nous
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Devis Gratuit
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Pourquoi Nous
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold"
            >
              Devis Gratuit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
