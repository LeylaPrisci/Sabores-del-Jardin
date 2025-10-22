
"use client";
import MainLayout from '../components/MainLayout';
import Button from '../components/Button';
import { CartButton, CartCounter, CartTotal, useAddToCart } from '../components/CartComponents';

export default function Home() {
  const { addToCartWithFeedback } = useAddToCart();

  const productosDelPack = [
    {
      id: 7,
      nombre: "Alfajores Caseros",
      descripcion: "Alfajores artesanales con dulce de leche",
      precio: 4500,
      imagen: "/productos/alfajor.png",
      categoria: "Gastronómicas"
    },
    {
      id: 6,
      nombre: "Vino Patero",
      descripcion: "Vino artesanal de uva criolla",
      precio: 5000,
      imagen: "/productos/vino.png",
      categoria: "Bebidas"
    },
    {
      id: 8,
      nombre: "Cerveza Artesanal",
      descripcion: "Cerveza local elaborada con ingredientes regionales",
      precio: 3600,
      imagen: "/productos/cerveza.png",
      categoria: "Bebidas"
    },
    {
      id: 3,
      nombre: "Quesillo de Cabra",
      descripcion: "Queso artesanal de cabra de los valles",
      precio: 10000,
      imagen: "/productos/queso.png",
      categoria: "Gastronómicas"
    }
  ];

  // Calcular precio total y precio con descuento del 25%
  const precioTotalOriginal = productosDelPack.reduce((total, producto) => total + producto.precio, 0);
  const precioConDescuento = Math.round(precioTotalOriginal * 0.75);
  const ahorroTotal = precioTotalOriginal - precioConDescuento;

  // Productos favoritos del jardín
  const productosFavoritos = [
    {
      id: 101,
      nombre: 'Miel de Caña',
      descripcion: 'Miel pura de caña artesanal',
      precio: 3000,
      imagen: '/productos/miel.png',
      categoria: 'Gastronómicas'
    },
    {
      id: 102,
      nombre: 'Quesillo Artesanal',
      descripcion: 'Quesillo artesanal de Tucumán',
      precio: 9000,
      imagen: '/productos/queso.png',
      categoria: 'Gastronómicas'
    },
    {
      id: 103,
      nombre: 'Cerámica Decorativa',
      descripcion: 'Cerámica decorativa hecha a mano',
      precio: 25000,
      imagen: '/productos/ceramica.png',
      categoria: 'Artesanías'
    },
    {
      id: 104,
      nombre: 'Vino Regional',
      descripcion: 'Vino regional de alta calidad',
      precio: 8000,
      imagen: '/productos/vino.png',
      categoria: 'Bebidas'
    }
  ];

  const handleAddPackDegustacion = () => {
    const factorDescuento = 0.75; 
    
    // Crear productos con precios promocionales y IDs únicos para el pack
    const productosConDescuento = productosDelPack.map((producto, index) => ({
      ...producto,
      id: producto.id + 1000,
      precio: Math.round(producto.precio * factorDescuento),
      categoria: "🎁 Pack Degustación",
      nombre: `${producto.nombre} (Pack)`
    }));
    
    productosConDescuento.forEach((producto) => {
      addToCartWithFeedback(producto, false);
    });
     
    setTimeout(() => {
      addToCartWithFeedback(productosConDescuento[0], true); 
    }, 100);
  };

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
            {productosFavoritos.map((producto) => (
              <div key={producto.id} className="group border-2 border-[#E8C39E] rounded-lg shadow p-4 flex flex-col items-center bg-transparent transition hover:scale-[1.03]">
                <img
                  alt={producto.descripcion}
                  src={producto.imagen}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 mb-2"
                />
                <h3 className="mt-2 text-base font-semibold text-[#009D71]">{producto.nombre}</h3>
                <p className="mt-1 text-lg font-bold text-[#808080]">${producto.precio.toLocaleString()}</p>
                <Button 
                  className="bg-[#009D71] text-white hover:bg-[#00805a] mt-2"
                  onClick={() => addToCartWithFeedback(producto, true)}
                >
                  Agregar al carrito
                </Button>
              </div>
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
        
        <section className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-[#E8C39E]/20 to-[#009D71]/20 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#009D71] mb-4">¿Ya tienes productos en tu carrito?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Productos en carrito:</span>
                <CartCounter className="text-[#009D71] font-semibold" showZero={true} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Total:</span>
                <CartTotal className="text-[#009D71] font-bold text-xl" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 border-2 border-[#E8C39E]">
              <h3 className="text-xl font-bold text-[#009D71] mb-3">🎁 Pack Degustación Tucumana</h3>
              <p className="text-gray-600 mb-4">Incluye los mejores sabores de nuestra región:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                {productosDelPack.map((producto) => (
                  <div key={producto.id} className="flex flex-col items-center">
                    <img src={producto.imagen} alt={producto.nombre} className="w-12 h-12 object-cover rounded-lg mb-1" />
                    <span className="text-center font-medium text-gray-700">{producto.nombre}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">
                  Precio individual: <span className="line-through">${precioTotalOriginal.toLocaleString()}</span>
                </p>
                <p className="text-[#009D71] font-bold text-lg mb-1">
                  Precio del pack: ${precioConDescuento.toLocaleString()}
                </p>
                <p className="text-green-600 font-semibold text-sm">
                  ¡Ahorrás ${ahorroTotal.toLocaleString()}! (25% OFF)
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <CartButton 
                className="bg-[#009D71] text-white px-6 py-3 rounded-lg hover:bg-[#00805a] transition-colors flex items-center gap-2"
                showBadge={false}
              >
                <span>Ver Carrito</span>
              </CartButton>
              
              <Button 
                className="bg-[#E8C39E] text-[#009D71] px-6 py-3 hover:bg-[#ddb589] font-semibold"
                onClick={handleAddPackDegustacion}
              >
                Agregar Pack Degustación (${precioConDescuento.toLocaleString()})
              </Button>
            </div>
          </div>
        </section>
      </div>
      
    </MainLayout>
  );
}
