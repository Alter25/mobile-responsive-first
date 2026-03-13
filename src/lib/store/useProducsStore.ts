import { create } from "zustand"
import { Productos } from "@/components/data/ProductosMarquee";
import type { ProductsType } from "@/types/Types"


interface StoreType {
  productos: ProductsType[];
  increaseProduct: (id:number, n:number) => void;
  decreaseProduct: (id:number, n:number) => void;
  addProduct: (p: ProductsType) => void;
  removeProduct: (id:number) => void;
}


export const useProductsStore = create<StoreType>((set) => ({
  productos: Productos,
  increaseProduct: (id: number, n: number) => set((state) => ({
    productos: state.productos.map(item =>
      item.id !== id ? item : { ...item, cantidad: (item.cantidad || 0) + n})
  })),
  decreaseProduct: (id: number, n: number) => set((state) => ({
    productos: state.productos.map(item =>
      item.id !== id ? item : item.cantidad>n?{ ...item, cantidad: (item.cantidad || 0) - n}:{...item,cantidad:0})
  })),
  addProduct: (p: ProductsType) => set((state) => ({
    productos:[...state.productos,p]
  })),
  removeProduct: (id: number) => set((state) => ({
    productos: state.productos.filter(p => p.id !== id)
  }))
}))