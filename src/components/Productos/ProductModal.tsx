import { cn } from "@/lib/utils"

interface Props {
  className?: string;
}

export default function ProductModal({ className }: Props) {
  return <section className={cn("w-40 h-40 absolute border-accent-emerald bg-fuchsia-300", className)}>

  </ section >
}