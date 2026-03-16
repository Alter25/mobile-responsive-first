import { useProductsStore } from "@/lib/store/useProducsStore";
import NavBarProduct from "@/components/Productos/NavBarProduct";
import ListaProductos from "@/components/Productos/ListaProductos";
import { useModalStore } from "@/lib/store/useModalStore";
import NewProduct from "@/components/Productos/NewProduct";

const Productos = () => {
  const { productos } = useProductsStore();
  const isOpen = useModalStore(state => state.isOpen);


  return <section className="w-full p-4 overflow-y-scroll">
    <section className="w-full relative border flex flex-col rounded-3xl bg-slate-500 h-full">
      <div className="flex justify-end mb-16">
        <NavBarProduct />
      </div>
      <div className="relative">
        {
          isOpen && <NewProduct />
        }
        <ListaProductos lista={productos} />
      </div>
    </section>
  </section>
}

export default Productos