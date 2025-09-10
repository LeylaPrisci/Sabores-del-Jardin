
"use client";
import MainLayout from '../components/MainLayout';
import Button from '../components/Button';

export default function Home() {
  return (
    <MainLayout title="Sabores del Jardín">
      <div className="bg-white">
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#E8C39E] to-[#009D71] rounded-xl shadow-lg mb-10">
              <img
                src="/logo/banner1.png"
                alt="Sabores del Jardín"
                className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-xl"
              />
              <div className="relative z-10 text-center py-16">
                <h1 className="text-5xl font-extrabold text-[#009D71] mb-4 drop-shadow-lg">Sabores del Jardín</h1>
                <p className="text-xl text-white mb-6">Lo mejor de Tucumán, directo a tu mesa.</p>
                <Button className="text-lg px-8 py-3 font-semibold bg-[#009D71] text-white hover:bg-[#00805a]" onClick={() => window.location.href = '/productos'}>
                  Explorar Productos
                </Button>
              </div>
        </section>
        <section className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#009D71] mb-4">Tradición y Pasión por lo Nuestro</h2>
              <p className="text-lg text-[#808080] mb-4">Apoyamos a productores locales y artesanos, garantizando autenticidad y calidad en cada producto.</p>
              <img src="/logo/agricultores2.jpg" alt="Productor local" className="w-full h-64 object-cover rounded-xl shadow" />
        </section>
        <section className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-[#009D71] mb-6">Explora Nuestros Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center bg-transparent">
                  <img src="/productos/saboresproductos1.png" alt="Delicias Gastronómicas" className="w-24 h-24 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold text-[#009D71] mb-1">Delicias Gastronómicas</h3>
                  <p className="text-[#808080] mb-2">Empanadas, miel, quesillo y más.</p>
                  <Button className="bg-[#009D71] text-white hover:bg-[#00805a]" onClick={() => window.location.href = '/productos'}>Ver más</Button>
                </div>
                <div className="border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center bg-transparent">
                  <img src="/productos/saboresproductos2.png" alt="Artesanías con Alma" className="w-24 h-24 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold text-[#009D71] mb-1">Artesanías con Alma</h3>
                  <p className="text-[#808080] mb-2">Cerámica, textil y arte local.</p>
                  <Button className="bg-[#009D71] text-white hover:bg-[#00805a]" onClick={() => window.location.href = '/productos'}>Ver más</Button>
                </div>
                <div className="border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center bg-transparent">
                  <img src="/productos/saboresproductos3.png" alt="Bebidas Regionales" className="w-24 h-24 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold text-[#009D71] mb-1">Bebidas Regionales</h3>
                  <p className="text-[#808080] mb-2">Vinos, licores y cervezas locales.</p>
                  <Button className="bg-[#009D71] text-white hover:bg-[#00805a]" onClick={() => window.location.href = '/productos'}>Ver más</Button>
                </div>
              </div>
        </section>
        <section className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#009D71] mb-6">Los Favoritos del Jardín</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {[
              {
                id: 1,
                name: 'Miel de Caña',
                href: '#',
                price: '$1200',
                imageSrc: '/productos/miel.png',
                imageAlt: 'Frasco de miel de caña artesanal.',
              },
              {
                id: 2,
                name: 'Quesillo Artesanal',
                href: '#',
                price: '$900',
                imageSrc: '/productos/queso.png',
                imageAlt: 'Quesillo artesanal de Tucumán.',
              },
              {
                id: 3,
                name: 'Cerámica Decorativa',
                href: '#',
                price: '$2500',
                imageSrc: '/productos/ceramica.png',
                imageAlt: 'Cerámica decorativa hecha a mano.',
              },
              {
                id: 4,
                name: 'Vino Regional',
                href: '#',
                price: '$1800',
                imageSrc: '/productos/vino.png',
                imageAlt: 'Botella de vino regional.',
              },
            ].map((product) => (
              <a key={product.id} href={product.href} className="group border-2 border-[#E8C39E] rounded-lg shadow p-4 flex flex-col items-center bg-transparent transition hover:scale-[1.03]">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 mb-2"
                />
                <h3 className="mt-2 text-base font-semibold text-[#009D71]">{product.name}</h3>
                <p className="mt-1 text-lg font-bold text-[#808080]">{product.price}</p>
                <Button className="bg-[#009D71] text-white hover:bg-[#00805a] mt-2">Agregar al carrito</Button>
              </a>
            ))}
          </div>
        </section>
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-[#009D71] mb-6">El Sello de Nuestros Sabores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/logo/seedling(1).svg" alt="Productores Tucumanos" className="w-14 h-14 mb-2" />
              <h3 className="text-lg font-semibold text-[#009D71] mb-1">Productores Tucumanos</h3>
              <p className="text-[#808080] mb-2">Apoyamos la economía local y el trabajo artesanal.</p>
            </div>
            <div className="bg-white border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/logo/award(1).svg" alt="Calidad Garantizada" className="w-14 h-14 mb-2" />
              <h3 className="text-lg font-semibold text-[#009D71] mb-1">Calidad Garantizada</h3>
              <p className="text-[#808080] mb-2">Productos frescos y elaborados con las mejores materias primas.</p>
            </div>
            <div className="bg-white border-2 border-[#E8C39E] rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/logo/truck(1).svg" alt="Directo a tu Hogar" className="w-14 h-14 mb-2" />
              <h3 className="text-lg font-semibold text-[#009D71] mb-1">Directo a tu Hogar</h3>
              <p className="text-[#808080] mb-2">Llevamos lo mejor de Tucumán a todo el país.</p>
            </div>
          </div>
        </section>
      </div>
      
    </MainLayout>
  );
}
