import type { ProductsResponse } from './types';

export const mockProducts: ProductsResponse = {
  products: [
    { id: 1, title: 'House Blend', description: 'Medium roast', category: 'coffee', price: 14.5, discountPercentage: 5, rating: 4.6, stock: 40, brand: 'Roastery', thumbnail: '' },
    { id: 2, title: 'Cold Brew Kit', description: 'Brew at home', category: 'equipment', price: 32, discountPercentage: 10, rating: 4.2, stock: 12, brand: 'Brewline', thumbnail: '' },
    { id: 3, title: 'Oat Milk', description: 'Barista edition', category: 'dairy-free', price: 4.2, discountPercentage: 0, rating: 4.8, stock: 90, thumbnail: '' },
    { id: 4, title: 'Espresso Beans', description: 'Dark roast', category: 'coffee', price: 18, discountPercentage: 8, rating: 4.7, stock: 25, brand: 'Roastery', thumbnail: '' },
    { id: 5, title: 'Pour-over Cone', description: 'Ceramic dripper', category: 'equipment', price: 26, discountPercentage: 0, rating: 4.4, stock: 8, brand: 'Brewline', thumbnail: '' },
  ],
  total: 5,
  skip: 0,
  limit: 5,
};
