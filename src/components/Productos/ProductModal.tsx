import { useState } from "react";
import { cn } from "@/lib/utils"
import Portal from "../Portal";
import { useModalStore } from "@/lib/store/useModalStore";
import type { ProductsType } from "@/types/Types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  className?: string;
  item?: ProductsType | null;
}

export default function ProductModal({ className, item = null }: Props) {
  const isOpen = useModalStore(s => s.isOpen);
  const close = useModalStore(s => s.close);
  const [name, setName] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>();
  const [precio, setPrecio] = useState<number>();

  if (!isOpen) return null;

  const title = item ? "Modifcar Producto" : "Nuevo Producto";

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  }
  const handleCantidad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCantidad(Number(value));
  }
  const handlePrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrecio(Number(value));
  }

  return <Portal>
    <div onClick={close} className={cn(" fixed inset-0 z-50 border-accent-emerald bg-black/50", className)} />
    <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none">
      <div className=" bg-white w-[70%] h-[80%] rounded-lg p-6 pointer-events-auto">
        <div className="w-full flex justify-center border-b p-2">
          <h1 className="w-[90%] text-3xl">{title}</h1>
          <Button className="">x</Button>
        </div>
        <div className="border rounded-xl mt-2 w-full h-[90%] flex flex-col justify-center items-center">
          <div className="mx-auto px-6 border w-110 h-150 flex flex-col items-center justify-start">
            <div className="flex flex-col w-full py-4 mx-auto">
              <label className="mx-2 font-serif text-sm" htmlFor="name">Nombre del producto</label>
              <Input className="w-full mx-auto" id="name" value={name} onChange={handleName} type="text" />
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="cantidad">Cantidad:</label>
                <Input id="cantidad" value={cantidad} onChange={handleCantidad} type="number" />
              </div>
              <div className="flex flex-col">
                <label className="mx-2" htmlFor="precio">Precio:</label>
                <Input id="precio" value={precio} onChange={handlePrecio} type="number" />
              </div>
            </div>
          </div>
          <p>nombre: {name}</p>
          <p>cantidad: {cantidad}</p>
          <p>precio: {precio}</p>
        </div>
      </div>
    </div>
  </Portal>

}