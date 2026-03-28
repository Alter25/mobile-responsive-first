import { apiFetch } from "@/api/client"
import type { ProductsType } from "@/types/Types"


export async function createProduct(producto: ProductsType): Promise<ProductsType> {
  return apiFetch<ProductsType>("/productos", {
    method: "POST",
    body:JSON.stringify(producto),
  })
}
export async function getProducts() {
  return apiFetch<ProductsType[]>("/productos");
}
