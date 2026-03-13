import { useProductsStore } from "@/lib/store/useProducsStore";
import NavBarProduct from "@/components/Productos/NavBarProduct";
import ListaProductos from "@/components/Productos/ListaProductos";


const Productos = () => {
  const { productos } = useProductsStore();
  return <section className="w-full p-4 h-screen">
    <section className="w-full relative border flex flex-col rounded-3xl bg-slate-500 h-full">
      <div className="flex justify-end mb-16">
        <NavBarProduct />
      </div>
      <div>
        <ListaProductos lista={productos} />
      </div>
    </section>
  </section>
}

export default Productos