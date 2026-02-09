import React from 'react';
import Image from "next/image";
import { useAddToCart } from './CartComponents';

interface ProductCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, descripcion, precio, imagen, categoria }) => {
  const { addToCartWithFeedback } = useAddToCart();

  const handleAddToCart = () => {
    addToCartWithFeedback({
      id,
      nombre,
      precio,
      imagen,
      categoria
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-[#E8C39E] hover:shadow-xl transition-shadow">
      <Image src={imagen} alt={nombre} className="w-32 h-32 object-cover rounded-lg mb-4" width={128} height={128} />
      <span className="text-xs bg-[#E8C39E] text-[#009D71] px-2 py-1 rounded-full mb-2 font-medium">
        {categoria}
      </span>
      <h3 className="text-lg font-semibold text-[#009D71] mb-2 text-center">{nombre}</h3>
      <p className="text-gray-600 text-sm mb-3 text-center">{descripcion}</p>
      <p className="text-[#009D71] font-bold text-xl mb-4">${precio?.toFixed(2) || '0.00'}</p>
      <button
        className="px-4 py-2 bg-[#009D71] text-white rounded-lg hover:bg-[#00805a] transition-colors font-medium"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
