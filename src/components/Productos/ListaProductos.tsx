import type { ProductsType } from "@/types/Types"


export default function listaProductos({ lista }: { lista?: ProductsType[] }) {
  return <section>
    {
      lista?.map(producto => {
        
      })
    }
  </section>
}