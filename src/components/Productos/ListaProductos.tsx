import type { ProductsType } from "@/types/Types"
import ProductCard from "../Cards"
import { useStore } from "@/lib/store/useStore"


export default function ListaProductos({ lista }: { lista?: ProductsType[] }) {
  const search = useStore(state => state.search);
  console.log(lista);

  return search === "" ? <section className="flex flex-col items-center justify-center sm:gap-8 sm:flex-row sm:flex-wrap">
    {
      lista?.map((producto, i) => {
        return <ProductCard key={i} item={producto} />
      })
    }
  </section> : <section className="flex flex-col items-center justify-center sm:gap-8 sm:flex-row sm:flex-wrap">
    {
      lista?.map((p, i) => {
        return p.name.includes(search) && <ProductCard key={i} item={p} />
      })
    }
  </section>
}