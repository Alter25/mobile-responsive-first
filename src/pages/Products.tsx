import { useEffect, useState } from "react";
import { useProductsStore } from "@/lib/store/useProducsStore";
import NavBarProduct from "@/components/Productos/NavBarProduct";
import ListaProductos from "@/components/Productos/ListaProductos";
import ProductModal from "@/components/Productos/ProductModal";
import type { ProductsType } from "@/types/Types";
import { getProducts } from "@/services/productServices";

const Productos = () => {
  const { productos } = useProductsStore();
  const [productList, setProductList] = useState<ProductsType[]>();
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProducts();
        setProductList([...productos, ...data])
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductos();
  }, [])


  return <section className="w-full p-4 overflow-y-scroll">
    <section className="w-full relative border flex flex-col rounded-3xl bg-slate-500 h-full">
      <div className="flex justify-end mb-16">
        <NavBarProduct />
      </div>
      <div className="relative">
        <ProductModal />
        <ListaProductos lista={productList} />
      </div>
    </section>
  </section>
}

export default Productos