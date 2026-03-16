import { createPortal } from "react-dom"

interface Props {
  children: React.ReactNode;
}


export default function Portal({ children }: Props) {
  const target = document.getElementById("modal-root");
  if (!target) return null;
  return createPortal(children, target);
}