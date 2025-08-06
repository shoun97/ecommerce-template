import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              HomeStyle
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Transformamos tu hogar con productos únicos y de calidad, 
              diseñados especialmente para la mujer moderna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">info@homestyle.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">123 Style Ave, City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 text-pink-400 mx-1" /> por HomeStyle © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;