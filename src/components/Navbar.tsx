import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
    <div className="font-bold text-xl">Sabores del Jardín</div>
    <div className="flex gap-6">
      <Link href="/">Inicio</Link>
      <Link href="/productos">Productos</Link>
      <Link href="/nosotros">Nuestra Historia</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/carrito">
        <span role="img" aria-label="carrito">🛒</span>
      </Link>
      <Link href="/cuenta">
        <span role="img" aria-label="usuario">👤</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
