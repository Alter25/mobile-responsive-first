import { create } from "zustand"
import type { ProductsType } from "@/types/Types"


interface StoreType {
  productos: ProductsType[];
  increaseProduct: () => void;
  decreaseProduct: () => void;
  addProduct: (p: ProductsType) => void;
  removeProduct: () => void;
}

