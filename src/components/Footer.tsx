
import React from 'react';
import Button from './Button';

const Footer: React.FC = () => (
  <footer className="relative bg-[#E8C39E] after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10 text-[#009D71] pt-12 pb-0 mt-16 w-full">
    <div className="w-full min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 w-full">
        <div className="md:col-span-2 flex flex-col items-center">
          <img src="/logo/logoSinFondo.png" alt="Logo Sabores del Jardín" className="w-40 h-auto mb-4" />
          <h5 className="uppercase font-bold mb-4 text-white">Sabores del Jardín</h5>
          <p className="text-sm text-white text-center pl-6">Lo mejor de Tucumán, directo a tu mesa. Productos auténticos, frescos y artesanales. ¡Descubre la tradición y el sabor!</p>
        </div>
        <div>
          <h5 className="uppercase font-bold mb-4">Links</h5>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline text-white">Inicio</a></li>
            <li><a href="/productos" className="hover:underline text-white">Productos</a></li>
            <li><a href="#" className="hover:underline text-white">Ofertas</a></li>
            <li><a href="#" className="hover:underline text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase font-bold mb-4">Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-white">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:underline text-white">Blog</a></li>
            <li><a href="#" className="hover:underline text-white">Reseñas</a></li>
            <li><a href="#" className="hover:underline text-white">Ayuda</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase font-bold mb-4">Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-white">Política</a></li>
            <li><a href="#" className="hover:underline text-white">Privacidad</a></li>
            <li><a href="#" className="hover:underline text-white">Términos</a></li>
            <li><a href="#" className="hover:underline text-white">Mapa del sitio</a></li>
          </ul>
        </div>
      </div>
      <hr className="border-white/20 mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 w-full">
        <form className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full">
          <input
            type="email"
            placeholder="Tu email"
            className="px-4 py-2 rounded border border-white focus:outline-none focus:ring-2 focus:ring-white text-black max-w-xs w-full"
          />
          <Button type="submit" className="text-[#E8C39E] hover:bg-[#E8C39E] hover:text-white font-semibold w-full sm:w-auto max-w-[140px]">Suscribirse</Button>
        </form>
  <div className="flex gap-4 justify-center md:justify-end pr-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-[#E8C39E]">
            <img src="/logo/brand-facebook.svg" alt="Facebook" className="w-7 h-7 inline" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-[#E8C39E]">
            <img src="/logo/brand-twitter.svg" alt="Twitter" className="w-7 h-7 inline" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-[#E8C39E]">
            <img src="/logo/brand-instagram.svg" alt="Instagram" className="w-7 h-7 inline" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-[#E8C39E]">
            <img src="/logo/brand-whatsapp.svg" alt="WhatsApp" className="w-7 h-7 inline" />
          </a>
        </div>
      </div>
      <hr className="border-white/20 mb-4" />
      <div className="w-full text-center py-3 text-white/80 text-sm" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
        &copy; {new Date().getFullYear()} Sabores del Jardín. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
