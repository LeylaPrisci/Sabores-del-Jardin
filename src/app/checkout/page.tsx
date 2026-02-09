"use client";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../../components/Button";

const CheckoutPage: React.FC = () => {
  const { items: contextItems, totalPrice: contextTotal, clearCart } = useCart();
  const [items, setItems] = useState<typeof contextItems>(contextItems.length > 0 ? contextItems : []);
  const [totalPrice, setTotalPrice] = useState<number>(contextItems.length > 0 ? contextTotal : 0);
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    if (contextItems.length === 0) {
      const storedItems = localStorage.getItem('checkout_items');
      const storedTotal = localStorage.getItem('checkout_total');
      setItems(storedItems ? JSON.parse(storedItems) : []);
      setTotalPrice(storedTotal ? JSON.parse(storedTotal) : 0);
    }
    setLoaded(true);
  }, [contextItems.length]);
  const [step, setStep] = useState<"summary" | "payment" | "confirmation">("summary");
  const [paymentType, setPaymentType] = useState("");
  const [installments, setInstallments] = useState(1);
  const [cardData, setCardData] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [customerData, setCustomerData] = useState({ name: "", email: "", phone: "" });
  const [address, setAddress] = useState({ street: "", city: "", province: "", postal: "" });

  if (!loaded) return null;

  // Paso 1: Resumen de compra
  if (step === "summary") {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#009D71] mb-4">Resumen de la compra</h2>
        <ul className="mb-4 divide-y">
          {items.map((item) => (
            <li key={item.id} className="py-2 flex justify-between items-center">
              <span className="font-medium">{item.nombre} x{item.cantidad}</span>
              <span className="text-[#009D71] font-semibold">${item.precio.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mb-6 flex justify-between items-center text-lg">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-[#009D71]">${Number(totalPrice).toFixed(2)}</span>
        </div>
        <h4 className="font-semibold mb-2">Selecciona forma de pago</h4>
        <div className="space-y-2 mb-6">
          <label className="flex items-center cursor-pointer">
            <input type="radio" name="paymentType" value="credito" checked={paymentType === "credito"} onChange={() => setPaymentType("credito")} />
            <span className="ml-2">Tarjeta de Crédito</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input type="radio" name="paymentType" value="debito" checked={paymentType === "debito"} onChange={() => setPaymentType("debito")} />
            <span className="ml-2">Tarjeta de Débito</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input type="radio" name="paymentType" value="pagofacil" checked={paymentType === "pagofacil"} onChange={() => setPaymentType("pagofacil")} />
            <span className="ml-2">PagoFácil</span>
          </label>
        </div>
        <Button className="w-full bg-[#009D71] text-white py-3 rounded-lg font-semibold" onClick={() => paymentType && setStep("payment")}>Continuar</Button>
      </div>
    );
  }

  // Paso 2: Datos de pago y envío
  if (step === "payment") {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#009D71] mb-4">Datos para el pago</h2>
        {paymentType === "credito" && (
          <div className="mb-4">
            <label className="block mb-1 font-medium">Cuotas (hasta 9 sin interés)</label>
            <select value={installments} onChange={e => setInstallments(Number(e.target.value))} className="w-full border rounded px-2 py-1 mb-2">
              {[...Array(9)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1} cuota{i+1 > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        )}
        {(paymentType === "credito" || paymentType === "debito") && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Número de tarjeta</label>
              <input type="text" value={cardData.number} onChange={e => setCardData({ ...cardData, number: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Nombre en la tarjeta</label>
              <input type="text" value={cardData.name} onChange={e => setCardData({ ...cardData, name: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Nombre y apellido" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Vencimiento</label>
              <input type="text" value={cardData.expiry} onChange={e => setCardData({ ...cardData, expiry: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="MM/AA" />
            </div>
            <div>
              <label className="block mb-1 font-medium">CVV</label>
              <input type="text" value={cardData.cvv} onChange={e => setCardData({ ...cardData, cvv: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="XXX" />
            </div>
          </div>
        )}
        <h4 className="font-semibold mb-2">Datos del cliente</h4>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <input type="text" value={customerData.name} onChange={e => setCustomerData({ ...customerData, name: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Nombre y apellido" />
          <input type="email" value={customerData.email} onChange={e => setCustomerData({ ...customerData, email: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Email" />
          <input type="text" value={customerData.phone} onChange={e => setCustomerData({ ...customerData, phone: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Teléfono" />
        </div>
        <h4 className="font-semibold mb-2">Dirección de envío</h4>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <input type="text" value={address.street} onChange={e => setAddress({ ...address, street: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Calle y número" />
          <input type="text" value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Ciudad" />
          <input type="text" value={address.province} onChange={e => setAddress({ ...address, province: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Provincia" />
          <input type="text" value={address.postal} onChange={e => setAddress({ ...address, postal: e.target.value })} className="w-full border rounded px-2 py-1 mb-2" placeholder="Código Postal" />
        </div>
        <Button className="w-full bg-[#009D71] text-white py-3 rounded-lg font-semibold" onClick={() => setStep("confirmation")}>Confirmar Compra</Button>
      </div>
    );
  }

  // Paso 3: Confirmación
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
      <svg className="w-16 h-16 mx-auto text-[#009D71] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-2xl font-bold mb-2 text-[#009D71]">¡Compra confirmada!</h2>
      <p className="mb-2">Gracias por tu compra, {customerData.name || "cliente"}.</p>
      <p className="mb-2">Recibirás el pedido en <span className="font-semibold">{address.street}, {address.city}, {address.province}</span>.</p>
      <p className="mb-2">Forma de pago: <span className="font-semibold">{paymentType === "credito" ? `Tarjeta de crédito (${installments} cuota${installments > 1 ? "s" : ""})` : paymentType === "debito" ? "Tarjeta de débito" : "PagoFácil"}</span></p>
      <p className="mb-2">Total: <span className="font-bold text-[#009D71]">${Number(totalPrice).toFixed(2)}</span></p>
      <Button className="mt-4 bg-[#009D71] text-white" onClick={() => { clearCart(); window.location.href = "/"; }}>Volver al inicio</Button>
    </div>
  );
};

export default CheckoutPage;
