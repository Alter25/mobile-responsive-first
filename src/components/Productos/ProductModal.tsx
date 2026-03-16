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
    <div onClick={close} className={cn(" fixed inset-0 z-50 border-accent-emerald bg-black/50", className)} />

  </Portal>

}