"use client";
import React, { useState } from "react";
import MainLayout from '../../../components/MainLayout';

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmarPassword: "",
  telefono: "",
  direccion: "",
  ciudad: "",
  provincia: "",
  codigoPostal: "",
  cuit: "",
  razonSocial: "",
  aceptaTerminos: false,
};

const RegistroPage: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.apellido || !form.email || !form.password || !form.confirmarPassword || !form.telefono || !form.direccion || !form.ciudad || !form.provincia || !form.codigoPostal) {
      setError("Por favor, completa todos los campos obligatorios.");
      setSuccess("");
      return;
    }
    if (form.password !== form.confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess("");
      return;
    }
    if (!form.aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("¡Registro exitoso! (Simulado)");
    setForm(initialState);
  };

  return (
    <MainLayout title="Registro - Sabores del Jardín">
      <div className="max-w-xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#009D71] mb-6">Crear cuenta</h1>
        <form className="bg-white rounded-xl shadow p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
            <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
          </div>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico*" className="border border-gray-300 rounded-lg px-4 py-2" />
          <div className="flex gap-4">
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Contraseña*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
            <input name="confirmarPassword" type="password" value={form.confirmarPassword} onChange={handleChange} placeholder="Confirmar contraseña*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
          </div>
          <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono*" className="border border-gray-300 rounded-lg px-4 py-2" />
          <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección*" className="border border-gray-300 rounded-lg px-4 py-2" />
          <div className="flex gap-4">
            <input name="ciudad" value={form.ciudad} onChange={handleChange} placeholder="Ciudad*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
            <input name="provincia" value={form.provincia} onChange={handleChange} placeholder="Provincia*" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
          </div>
          <input name="codigoPostal" value={form.codigoPostal} onChange={handleChange} placeholder="Código Postal*" className="border border-gray-300 rounded-lg px-4 py-2" />
          <input name="cuit" value={form.cuit} onChange={handleChange} placeholder="CUIT (opcional)" className="border border-gray-300 rounded-lg px-4 py-2" />
          <input name="razonSocial" value={form.razonSocial} onChange={handleChange} placeholder="Razón Social (opcional)" className="border border-gray-300 rounded-lg px-4 py-2" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="aceptaTerminos" checked={form.aceptaTerminos} onChange={handleChange} />
            Acepto los <a href="#" className="text-[#009D71] underline">términos y condiciones</a> *
          </label>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <button type="submit" className="bg-[#009D71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00805a] transition-colors mt-2">Crear cuenta</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegistroPage;
