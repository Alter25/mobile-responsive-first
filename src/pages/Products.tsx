import { useStore } from "@/lib/store/useStore"
import NavBarProduct from "@/components/Productos/NavBarProduct";


const Productos = () => {
  const { logged } = useStore();
  return <section className="w-full p-4 h-screen">
    <section className="relative border rounded-3xl bg-slate-500 h-full">
      <NavBarProduct />
    </section>
  </section>
}

export default Productos