import type { ProductsType } from "@/types/Types"
import { ProductCard } from "../Cards"


export default function listaProductos({ lista }: { lista?: ProductsType[] }) {
  return <section>
    {
      lista?.map(producto => {
        return <ProductCard item={producto} />
      })
    }
  </section>
}