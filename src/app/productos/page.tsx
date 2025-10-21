"use client";
import MainLayout from '../../components/MainLayout';
import ProductCard from '../../components/ProductCard';

export default function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Empanadas Tucumanas",
      descripcion: "Deliciosas empanadas caseras con carne cortada a cuchillo",
      precio: 12000,
      imagen: "/productos/empanadas.png",
      categoria: "Gastronómicas"
    },
    {
      id: 2,
      nombre: "Miel de Abeja",
      descripcion: "Miel pura de las sierras tucumanas",
      precio: 3000,
      imagen: "/productos/miel.png",
      categoria: "Gastronómicas"
    },
    {
      id: 3,
      nombre: "Quesillo de Cabra",
      descripcion: "Queso artesanal de cabra de los valles",
      precio: 10000,
      imagen: "/productos/queso.png",
      categoria: "Gastronómicas"
    },
    {
      id: 4,
      nombre: "Cerámica Artesanal",
      descripcion: "Jarrones y platos hechos a mano",
      precio: 22000,
      imagen: "/productos/ceramica.png",
      categoria: "Artesanías"
    },
    {
      id: 5,
      nombre: "Textil Tradicional",
      descripcion: "Ponchos y mantas tejidos a telar",
      precio: 35000,
      imagen: "/productos/poncho.png",
      categoria: "Artesanías"
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
      id: 7,
      nombre: "Alfajores Caseros",
      descripcion: "Alfajores artesanales con dulce de leche",
      precio: 4500,
      imagen: "/productos/alfajor.png",
      categoria: "Gastronómicas"
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
      id: 9,
      nombre: "Aceites Artesanales",
      descripcion: "Aceites esenciales y aromáticos locales",
      precio: 6000,
      imagen: "/productos/aceitesArtesanal.png",
      categoria: "Gastronómicas"
    },
    {
      id: 10,
      nombre: "Canastos de Mimbre",
      descripcion: "Canastos tejidos a mano con técnicas tradicionales",
      precio: 8500,
      imagen: "/productos/canastos.png",
      categoria: "Artesanías"
    },
    {
      id: 11,
      nombre: "Hierbas Medicinales",
      descripcion: "Hierbas secas para infusiones y remedios naturales",
      precio: 3200,
      imagen: "/productos/hierbas.png",
      categoria: "Gastronómicas"
    },
    {
      id: 12,
      nombre: "Tallado en Madera",
      descripcion: "Figuras y utensilios tallados en madera nativa",
      precio: 15000,
      imagen: "/productos/tallado.png",
      categoria: "Artesanías"
    }
  ];

  return (
    <MainLayout title="Productos - Sabores del Jardín">
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-[#009D71] mb-8 text-center">
            Nuestros Productos
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagen={producto.imagen}
                categoria={producto.categoria}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}