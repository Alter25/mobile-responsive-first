import { useStore } from "@/lib/store/useStore"
import NavBarProduct from "@/components/Productos/NavBarProduct";
import listaProductos from "@/components/Productos/ListaProductos";


const Productos = () => {
  const { logged } = useStore();
  return <section className="w-full p-4 h-screen">
    <section className="w-full relative border flex flex-col rounded-3xl bg-slate-500 h-full">
      <div className="flex justify-end">
        <NavBarProduct />
      </div>
      <div>
        <listaProductos />
      </div>
    </section>
  </section>
}

export default Productos