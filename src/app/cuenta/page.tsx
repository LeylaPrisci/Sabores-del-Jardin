"use client";
import React, { useState } from "react";
import MainLayout from '../../components/MainLayout';

const mockUser = {
  nombre: "Juan Pérez",
  email: "juanperez@email.com",
  telefono: "+54 381 123-4567",
  direccion: "Calle Falsa 123, Tucumán",
  facturacion: {
    cuit: "20-12345678-9",
    razonSocial: "Juan Pérez SRL",
    direccion: "Calle Falsa 123, Tucumán"
  },
  compras: [
    { id: 1, fecha: "2025-12-01", total: 15000, estado: "Entregado", direccion: "Calle Falsa 123, Tucumán", calificacion: 5 },
    { id: 2, fecha: "2025-11-15", total: 8000, estado: "Enviado", direccion: "Av. Siempre Viva 742, Tucumán", calificacion: null },
  ]
};

const PerfilPage: React.FC = () => {
  const [user] = useState(mockUser);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMsg("Las contraseñas no coinciden.");
      return;
    }
    setPasswordMsg("Contraseña cambiada exitosamente (simulado)");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <MainLayout title="Mi Perfil - Sabores del Jardín">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#009D71] mb-6">Mi Perfil</h1>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Datos personales</h2>
          <div className="mb-2"><b>Nombre:</b> {user.nombre}</div>
          <div className="mb-2"><b>Email:</b> {user.email}</div>
          <div className="mb-2"><b>Teléfono:</b> {user.telefono}</div>
          <div className="mb-2"><b>Dirección principal:</b> {user.direccion}</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Direcciones de envío</h2>
          <ul className="list-disc ml-6">
            <li>{user.direccion}</li>
            {user.compras.map((c, i) => (
              <li key={i}>{c.direccion}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Compras realizadas</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Dirección</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {user.compras.map((c) => (
                <tr key={c.id} className="border-b">
                  <td>{c.fecha}</td>
                  <td>${c.total}</td>
                  <td>{c.estado}</td>
                  <td>{c.direccion}</td>
                  <td>{c.calificacion ? '⭐'.repeat(c.calificacion) : 'Sin calificar'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Datos de facturación</h2>
          <div className="mb-2"><b>CUIT:</b> {user.facturacion.cuit}</div>
          <div className="mb-2"><b>Razón social:</b> {user.facturacion.razonSocial}</div>
          <div className="mb-2"><b>Dirección:</b> {user.facturacion.direccion}</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Cambio de contraseña</h2>
          <form className="flex flex-col gap-3" onSubmit={handlePasswordChange}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-500"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirmar nueva contraseña"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-green-500"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)} /> Mostrar contraseña
            </label>
            {passwordMsg && <div className="text-green-600 text-sm">{passwordMsg}</div>}
            <button type="submit" className="bg-[#009D71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00805a] transition-colors w-fit">Cambiar contraseña</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PerfilPage;