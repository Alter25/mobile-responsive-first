import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  // MenubarSeparator,
  // MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function NavbarButton() {
  return (
    <nav className="flex sm:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="bg-hero-bg min-w-24 mr-2 border border-indigo-400">
            <MenubarGroup className="flex flex-col items-start justify-center">
              <MenubarItem className="hover:bg-indigo-700/40 w-full"><Link to="/" >Inicio</Link></MenubarItem>
              <MenubarItem className="hover:bg-indigo-700/40 w-full"><Link to="/Productos" >Productos</Link></MenubarItem>
              <MenubarItem className="hover:bg-indigo-700/40 w-full"><Link to="/AboutUs" >Nosotros</Link></MenubarItem>
              <MenubarItem className="hover:bg-indigo-700/40 w-full"><Link to="/Contact" >Contacto</Link></MenubarItem>
              <MenubarItem className="hover:bg-indigo-700/40 w-full"><Link to="/Login" >Login</Link></MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav >
  )
}