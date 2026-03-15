import type { ProductsType } from "@/types/Types"
import { ProductCard } from "../Cards"
import { useStore } from "@/lib/store/useStore"


export default function ListaProductos({ lista }: { lista?: ProductsType[] }) {
  const search = useStore(state => state.search);

  return search === "" ? <section className="flex flex-col items-center justify-center sm:gap-8 sm:flex-row sm:flex-wrap">
    {
      lista?.map(producto => {
        return <ProductCard item={producto} />
      })
    }
  </section> : <section>
    {
      lista?.map(p => {
        return p.name.includes(search) && <ProductCard item={p} />
      })
    }
  </section>
}