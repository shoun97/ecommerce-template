import React from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItems,
  onCartClick,
  searchTerm,
  onSearchChange,
  isMenuOpen,
  onMenuToggle
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                HomeStyle
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Productos</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Ofertas</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Contacto</a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center max-w-md mx-4 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-gray-700 hover:text-pink-500 transition-colors relative"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Inicio</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Productos</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Ofertas</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;