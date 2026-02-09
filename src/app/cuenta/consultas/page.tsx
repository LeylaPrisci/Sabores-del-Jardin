"use client";
import React from "react";
import MainLayout from '../../../components/MainLayout';

const mediosContacto = [
  { tipo: "WhatsApp", valor: "+54 381 555-1234", link: "https://wa.me/543815551234" },
  { tipo: "Email", valor: "info@saboresdeljardin.com", link: "mailto:info@saboresdeljardin.com" },
  { tipo: "Instagram", valor: "@saboresdeljardin", link: "https://instagram.com/saboresdeljardin" },
];

const mediosEnvio = [
  "Envío a domicilio en San Miguel de Tucumán",
  "Retiro en local (sin costo)",
  "Envíos a todo el país por Correo Argentino",
];

const preguntasFrecuentes = [
  {
    pregunta: "¿Cuánto tarda el envío?",
    respuesta: "En San Miguel de Tucumán, el mismo día o al siguiente. Al resto del país, entre 3 y 7 días hábiles.",
  },
  {
    pregunta: "¿Cómo puedo hacer seguimiento de mi pedido?",
    respuesta: "Te enviaremos un número de seguimiento por email o WhatsApp una vez despachado tu pedido.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos efectivo, transferencia bancaria y Mercado Pago.",
  },
  {
    pregunta: "¿Puedo modificar mi pedido después de comprar?",
    respuesta: "Sí, comunícate lo antes posible por WhatsApp o email para gestionar el cambio.",
  },
];

const pasosDevolucion = [
  "Contactanos por WhatsApp o email dentro de las 48 horas de recibido el producto, indicando el motivo de la devolución y número de pedido.",
  "Nuestro equipo evaluará tu caso y te indicará los pasos a seguir.",
  "Deberás devolver el producto en su empaque original y sin uso.",
  "Una vez recibido y verificado el producto, se realizará el reembolso o cambio correspondiente.",
];

const condicionesDevolucion = [
  "El producto debe estar sin uso, en perfectas condiciones y con su empaque original.",
  "La solicitud debe realizarse dentro de las 48 horas de recibido el pedido.",
  "No se aceptan devoluciones de productos alimenticios abiertos o consumidos, ni de productos personalizados.",
];

const ConsultasPage: React.FC = () => {
  return (
    <MainLayout title="Consultas y Ayuda - Sabores del Jardín">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#009D71] mb-6">Consultas y Ayuda</h1>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">¿Necesitás contactarnos?</h2>
          <ul className="list-disc ml-6">
            {mediosContacto.map((m) => (
              <li key={m.tipo} className="mb-1">
                <b>{m.tipo}:</b> <a href={m.link} className="text-[#009D71] hover:underline" target="_blank" rel="noopener noreferrer">{m.valor}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Medios de envío disponibles</h2>
          <ul className="list-disc ml-6">
            {mediosEnvio.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Devoluciones</h2>
          <h3 className="font-semibold mb-1">¿Cuándo es aceptable la devolución?</h3>
          <ul className="list-disc ml-6 mb-3">
            {condicionesDevolucion.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          <h3 className="font-semibold mb-1">Pasos para solicitar una devolución</h3>
          <ol className="list-decimal ml-6">
            {pasosDevolucion.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Preguntas frecuentes</h2>
          <div className="divide-y">
            {preguntasFrecuentes.map((faq, i) => (
              <div key={i} className="py-3">
                <div className="font-semibold text-[#009D71]">{faq.pregunta}</div>
                <div className="text-gray-700">{faq.respuesta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConsultasPage;
