import React, { useState } from 'react';
import Link from 'next/link';
import LogoutModal from './LogoutModal';

const Navbar: React.FC = () => {
  // Simulación de usuario logueado (reemplazar por lógica real de autenticación)
  const isLoggedIn = true;
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">Sabores del Jardín</div>
      <div className="flex gap-6 items-center">
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
        {isLoggedIn && (
          <button
            className="ml-2 px-4 py-2 bg-white text-green-900 rounded-lg font-semibold hover:bg-green-100 transition-colors border border-green-200"
            onClick={() => setLogoutModalOpen(true)}
          >
            Cerrar sesión
          </button>
        )}
      </div>
      <LogoutModal open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
