import { Outlet } from "react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

export default function MainLayout() {
  return <div className="flex flex-col min-h-screen">
    <Header />
    <main className="grow">
      <Outlet />
    </main>
    <Footer
      Rss={<div className="flex flex-col justify-evenly h-full">
        <FaWhatsapp size={48} />
        <FaInstagram size={48} />
        <FiPhone size={40} />
      </div>}
      ubicacion={
        <div>
          <h2 className="flex text-2xl">Gomez Palacio, Dgo.<span><IoLocationSharp size={24} /></span></h2>
          <p></p>
        </div>
      }
    >
      <div>
        <p className="text-3xl">Todos los derechos reservados. &copy;</p>
      </div>
    </Footer>
  </div>
}