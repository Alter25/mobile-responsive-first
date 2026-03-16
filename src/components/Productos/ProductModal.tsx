import { cn } from "@/lib/utils"
import Portal from "../Portal";
import { useModalStore } from "@/lib/store/useModalStore";
import type { ProductsType } from "@/types/Types";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  item?: ProductsType | null;
}

export default function ProductModal({ className, item = null }: Props) {
  const isOpen = useModalStore(s => s.isOpen);
  const close = useModalStore(s => s.close);

  if (!isOpen) return null;

  const title = item ? "Modifcar Producto" : "Nuevo Producto";



  return <Portal>
    <div onClick={close} className={cn(" fixed inset-0 z-50 border-accent-emerald bg-black/50", className)} />
    <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none">
      <div className="bg-white w-[70%] h-[80%] rounded-lg p-6 pointer-events-auto">
        <div className="w-full flex justify-center border-b p-2">
          <h1 className="w-[90%] text-3xl">{title}</h1>
          <Button className="">x</Button>
        </div>
        <div className="border">
          
        </div>
      </div>
    </div>
  </Portal>

}