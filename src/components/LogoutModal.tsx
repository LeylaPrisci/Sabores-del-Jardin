"use client";
import React from "react";
import Link from 'next/link';

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full max-w-md mx-auto border border-[#009D71]/20 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#009D71] text-2xl font-bold">&times;</button>
        <div className="bg-[#e6faf4] rounded-full p-4 mb-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#009D71" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m10.5 3.75v5.25A2.25 2.25 0 0116.5 20.25h-9A2.25 2.25 0 015.25 18V12.75m14.25 0V12A9 9 0 003 12v.75m16.5 0H3" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-[#009D71] mb-2 tracking-tight">Sesión cerrada</h1>
        <p className="text-base text-gray-700 mb-6 text-center">Has cerrado tu sesión.<br />¿Qué deseas hacer ahora?</p>
        <div className="flex flex-col gap-3 w-full">
          <Link href="/cuenta/login" className="bg-[#009D71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00805a] transition-colors text-center shadow-md">Iniciar sesión</Link>
          <Link href="/cuenta/registro" className="bg-white border border-[#009D71] text-[#009D71] px-6 py-3 rounded-lg font-semibold hover:bg-[#00805a] hover:text-white transition-colors text-center shadow-md">Crear nueva cuenta</Link>
          <Link href="/" className="mt-2 underline text-[#009D71] hover:text-[#00805a] text-center text-sm">Volver al inicio</Link>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LogoutModal;
