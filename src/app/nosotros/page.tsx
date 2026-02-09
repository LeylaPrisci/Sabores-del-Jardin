
"use client";
import React from 'react';
import MainLayout from '../../components/MainLayout';

const NosotrosPage: React.FC = () => {
  return (

    <MainLayout title="Sobre Nosotros - Sabores del Jardín">
      <div className="bg-white min-h-screen w-full h-full">
        <div className="w-full h-full px-0 py-0">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre <span className="text-[#009D71]">Nosotros</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubre la historia detrás de Sabores del Jardín, donde la tradición tucumana 
              se encuentra con la calidad artesanal.
            </p>
          </div>
          {/* Nuestra Historia */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sabores del Jardín nació del amor por las tradiciones culinarias de Tucumán, 
                  la provincia más pequeña pero con los sabores más grandes de Argentina.
                </p>
                <p>
                  Desde 2018, nos dedicamos a rescatar y preservar las recetas ancestrales, 
                  trabajando de la mano con productores locales que mantienen vivas las 
                  técnicas artesanales transmitidas de generación en generación.
                </p>
                <p>
                  Cada producto que ofrecemos cuenta una historia: la del campo tucumano, 
                  la de nuestros abuelos, y la de una tierra bendecida por el sol y la lluvia 
                  que hacen posible estos sabores únicos.
                </p>
              </div>
            </div>
            <div className="bg-[#009D71]/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#009D71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hecho con Amor</h3>
                <p className="text-gray-600">
                  Cada producto es elaborado con dedicación y pasión, 
                  manteniendo los estándares más altos de calidad.
                </p>
              </div>
            </div>
          </div>
          {/* Nuestros Valores */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#009D71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Calidad Artesanal</h3>
                <p className="text-gray-600">
                  Elaboramos cada producto siguiendo métodos tradicionales que garantizan 
                  el sabor auténtico de Tucumán.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#009D71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    <path d="M12 11l0 .01" />
                    <path d="M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Origen Local</h3>
                <p className="text-gray-600">
                  Trabajamos exclusivamente con productores tucumanos, 
                  apoyando la economía local y familiar.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#009D71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17l-2 2l2 2" />
                    <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                    <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
                    <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
                    <path d="M15.464 11l2.732 .732l.732 -2.732" />
                    <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustentabilidad</h3>
                <p className="text-gray-600">
                  Promovemos prácticas sustentables que respetan el medio ambiente 
                  y preservan nuestros recursos naturales.
                </p>
              </div>
            </div>
          </div>
          {/* Nuestro Equipo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestro Compromiso</h2>
            <div className="w-full">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                En Sabores del Jardín, no solo vendemos productos, compartimos cultura. 
                Cada empanada, cada frasco de miel, cada queso que llega a tu mesa 
                lleva consigo la esencia de Tucumán y el compromiso de mantener vivas 
                nuestras tradiciones gastronómicas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Te invitamos a ser parte de esta historia, a descubrir los auténticos 
                sabores de nuestra tierra y a compartir con tus seres queridos la magia 
                de los productos artesanales tucumanos.
              </p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Listo para descubrir nuestros sabores?
            </h3>
            <button
              onClick={() => window.location.href = '/productos'}
              className="bg-[#009D71] text-white px-8 py-3 rounded-lg hover:bg-[#00805a] transition-colors font-semibold text-lg"
            >
              Explorar Productos
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NosotrosPage;