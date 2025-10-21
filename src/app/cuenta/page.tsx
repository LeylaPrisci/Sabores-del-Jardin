"use client";
import MainLayout from '../../components/MainLayout';
import Button from '../../components/Button';

export default function Cuenta() {
  return (
    <MainLayout title="Mi Cuenta - Sabores del Jardín">
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-[#009D71] mb-8 text-center">
            Mi Cuenta
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sección de Login */}
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#009D71] mb-4">
                Iniciar Sesión
              </h2>
              <form className="space-y-4">
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
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full bg-[#009D71] text-white hover:bg-[#00805a]">
                  Iniciar Sesión
                </Button>
              </form>
            </div>

            {/* Sección de Registro */}
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#009D71] mb-4">
                Crear Cuenta
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
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
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009D71]"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full bg-[#E8C39E] text-[#009D71] hover:bg-[#ddb589] font-semibold">
                  Crear Cuenta
                </Button>
              </form>
            </div>
          </div>

          {/* Sección de perfil (para usuarios logueados) */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-[#009D71] mb-4">
              Panel de Usuario
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium text-[#009D71] mb-2">Mis Pedidos</h3>
                <p className="text-gray-600">Ver historial de compras</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium text-[#009D71] mb-2">Favoritos</h3>
                <p className="text-gray-600">Productos guardados</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium text-[#009D71] mb-2">Perfil</h3>
                <p className="text-gray-600">Editar información</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}