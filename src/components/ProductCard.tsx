import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, onAddToCart }) => (
  <div className="bg-white rounded shadow p-4 flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 object-cover rounded mb-2" />
    <h3 className="text-lg font-semibold mb-1">{name}</h3>
    <p className="text-green-700 font-bold mb-2">${price.toFixed(2)}</p>
    <button
      className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800"
      onClick={onAddToCart}
    >
      Agregar al carrito
    </button>
  </div>
);

export default ProductCard;
