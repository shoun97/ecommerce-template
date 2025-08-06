import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'decoracion', name: 'Decoración', icon: '🎨' },
  { id: 'organizacion', name: 'Organización', icon: '📦' },
  { id: 'textiles', name: 'Textiles', icon: '🏠' },
  { id: 'cocina', name: 'Cocina', icon: '🍳' },
  { id: 'baño', name: 'Baño', icon: '🛁' },
  { id: 'iluminacion', name: 'Iluminación', icon: '💡' }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Juego de Cojines Decorativos Boho',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'decoracion',
    description: 'Set de 4 cojines decorativos con diseños bohemios en tonos tierra. Perfectos para crear un ambiente acogedor en tu sala.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: 'Organizador de Maquillaje Acrílico',
    price: 45.99,
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'organizacion',
    description: 'Organizador transparente con múltiples compartimentos para maquillaje y accesorios de belleza.',
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: 'Manta Tejida Premium',
    price: 75.99,
    image: 'https://images.pexels.com/photos/1909656/pexels-photo-1909656.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'textiles',
    description: 'Manta suave y cálida tejida a mano con fibras naturales. Ideal para las noches frías de invierno.',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: true
  },
  {
    id: 4,
    name: 'Set de Bowls de Cerámica Artesanal',
    price: 52.99,
    originalPrice: 68.99,
    image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'cocina',
    description: 'Conjunto de 6 bowls de cerámica hechos a mano con acabado mate. Perfecto para desayunos y cenas elegantes.',
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  {
    id: 5,
    name: 'Espejo Decorativo con Marco Dorado',
    price: 125.99,
    image: 'https://images.pexels.com/photos/6316075/pexels-photo-6316075.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'decoracion',
    description: 'Espejo redondo con elegante marco dorado que aporta luminosidad y estilo a cualquier espacio.',
    rating: 4.8,
    reviews: 92,
    inStock: true
  },
  {
    id: 6,
    name: 'Organizador de Closet Modular',
    price: 67.99,
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'organizacion',
    description: 'Sistema modular de organización para closet con cajas plegables y divisores ajustables.',
    rating: 4.5,
    reviews: 143,
    inStock: false
  },
  {
    id: 7,
    name: 'Juego de Toallas de Bambú',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6444/bath-bathing-clean-towel.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'baño',
    description: 'Set de 6 toallas de fibra de bambú ultra suaves y absorbentes. Antibacteriales y ecológicas.',
    rating: 4.9,
    reviews: 167,
    inStock: true,
    isNew: true
  },
  {
    id: 8,
    name: 'Lámpara Colgante Minimalista',
    price: 95.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'iluminacion',
    description: 'Lámpara colgante con diseño minimalista y acabado en cobre. Crea una iluminación cálida y moderna.',
    rating: 4.7,
    reviews: 85,
    inStock: true
  }
];