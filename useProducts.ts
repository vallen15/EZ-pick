import { useState, useEffect } from 'react';
import type { Product } from '../types';

const DUMMY_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan bumbu rahasia, telur mata sapi, ayam suwir, dan kerupuk udang renyah.',
    price: 35000,
    category: 'food',
    image_url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80',
    badge: 'Terlaris',
    rating: 4.8,
    review_count: 320,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Sate Ayam Madura',
    description: 'Sate ayam full daging dengan bumbu kacang kental dan irisan bawang merah segar.',
    price: 30000,
    category: 'food',
    image_url: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    badge: 'Rekomendasi',
    rating: 4.9,
    review_count: 415,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Mie Goreng Seafood',
    description: 'Mie goreng tek-tek khas Jawa dengan topping udang, cumi, dan bakso ikan pilihan.',
    price: 45000,
    category: 'food',
    image_url: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80',
    badge: null,
    rating: 4.6,
    review_count: 120,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Burger Wagyu Premium',
    description: 'Burger berukuran besar dengan daging wagyu panggang, keju lumer, sayur segar, dan saus BBQ.',
    price: 65000,
    category: 'food',
    image_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80',
    badge: 'Premium',
    rating: 5.0,
    review_count: 85,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Es Kopi Susu Aren',
    description: 'Perpaduan espresso biji kopi Arabica murni, susu segar, dan gula aren asli Nusantara.',
    price: 22000,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80',
    badge: 'Terlaris',
    rating: 4.7,
    review_count: 530,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Matcha Latte',
    description: 'Teh hijau kualitas impor dari Kyoto Jepang yang dipadukan dengan susu segar yang lembut.',
    price: 28000,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?auto=format&fit=crop&q=80',
    badge: 'Favorit',
    rating: 4.9,
    review_count: 210,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Lemon Tea Ice',
    description: 'Teh hitam klasik dicampur perasan lemon asli dingin yang menyegarkan dahaga di siang hari.',
    price: 15000,
    category: 'drink',
    image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80',
    badge: null,
    rating: 4.5,
    review_count: 80,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Pancake Sirup Maple',
    description: 'Pancake tebal dan bertekstur lembut dengan mentega dan disiram sirup maple murni.',
    price: 35000,
    category: 'dessert',
    image_url: 'https://images.unsplash.com/photo-1528207776546-3221862ce253?auto=format&fit=crop&q=80',
    badge: 'Promo',
    rating: 4.8,
    review_count: 310,
    in_stock: true,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Gelato Vanilla Berry',
    description: 'Gelato khas Italia rasa vanilla autentik dengan siraman saus stroberi dan rasberi segar.',
    price: 30000,
    category: 'dessert',
    image_url: 'https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?auto=format&fit=crop&q=80',
    badge: 'Baru',
    rating: 4.6,
    review_count: 45,
    in_stock: true,
    created_at: new Date().toISOString()
  }
];

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    // Simulasi loading agar terkesan mengambil data dari server betulan
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = DUMMY_PRODUCTS;
      if (category && category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      }
      setProducts(filtered);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [category]);

  return { products, loading, error };
}
