"use client";
import MainLayout from '../../components/MainLayout';
import Button from '../../components/Button';

export default function Contacto() {
  return (
    <MainLayout title="Contacto - Sabores del Jardín">
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-[#009D71] mb-8 text-center">
            Contáctanos
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulario de contacto */}
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#009D71] mb-4">
                Envíanos un mensaje
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#009D71] text-white hover:bg-[#00805a]">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-[#009D71] mb-4">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#009D71] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" />
                        <path d="M9 4v13" />
                        <path d="M15 7v5" />
                        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                        <path d="M19 18v.01" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dirección</p>
                      <p className="text-gray-600">San Miguel de Tucumán, Tucumán, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#009D71] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Teléfono</p>
                      <p className="text-gray-600">+54 381 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#009D71] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@saboresdeljardin.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#009D71] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 12l3 -2" />
                        <path d="M12 7v5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Horarios</p>
                      <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sáb: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-[#009D71] mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex space-x-4">
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    Facebook
                  </Button>
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    Instagram
                  </Button>
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}