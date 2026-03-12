import { create } from "zustand"
import type { ProductsType } from "@/types/Types"


interface StoreType{
  productos: ProductsType[];
  
}