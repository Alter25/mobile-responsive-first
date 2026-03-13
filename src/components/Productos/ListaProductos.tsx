import type { ProductsType } from "@/types/Types"
import { ProductCard } from "../Cards"


export default function ListaProductos({ lista }: { lista?: ProductsType[] }) {
  return <section className="flex flex-wrap">
    {
      lista?.map(producto => {
        return <ProductCard item={producto} />
      })
    }
  </section>
}