"use client";
import Image from "next/image";
import React, { useState } from "react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      return;
    }
    setError("");
    alert("¡Inicio de sesión simulado! (Implementa la lógica real aquí)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full max-w-md mx-auto border border-[#009D71]/20 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#009D71] text-2xl font-bold">&times;</button>
        <Image
          src="/logo/logoSinFondo.png"
          alt="Logo Sabores del Jardín"
          className="w-20 h-20 mb-4"
          width={80}
          height={80}
        />
        <h1 className="text-2xl font-bold text-[#009D71] mb-4">Iniciar sesión</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-500"
            autoFocus
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-500"
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-[#009D71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00805a] transition-colors"
          >
            Ingresar
          </button>
        </form>
        <a href="/cuenta/registro" className="mt-4 text-[#009D71] hover:underline text-sm">¿No tienes cuenta? Regístrate</a>
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

export default LoginModal;
