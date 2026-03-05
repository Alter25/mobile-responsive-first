import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { ReactNode } from "react";

interface Props{
  children: ReactNode;
}

export default function MainLayout({children}:Props) {
  return <div className="relative">
    <Header></Header>
    {children}
    <Footer>
      <p>hola</p>
    </Footer>
  </div>
}