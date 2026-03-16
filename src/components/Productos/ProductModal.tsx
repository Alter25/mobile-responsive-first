import { cn } from "@/lib/utils"
import Portal from "../Portal";
import { useModalStore } from "@/lib/store/useModalStore";

interface Props {
  className?: string;
}

export default function ProductModal({ className }: Props) {
  const isOpen = useModalStore(s => s.isOpen);
  const close = useModalStore(s => s.close);

  if (!isOpen) return null;

  return <Portal>
    <section className={cn("w-120 h-200 absolute border-accent-emerald bg-fuchsia-300", className)}>

    </ section >
  </Portal>

}