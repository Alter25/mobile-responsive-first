import { Menu } from "lucide-react";
import { Link } from "react-router";
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
          {/* force a smaller dropdown by overriding the builtin min-w and setting a width */}
          <MenubarContent className="bg-hero-bg min-w-24 mr-2 border border-red-900">
            <MenubarGroup className="flex flex-col items-start justify-center">
              <MenubarItem><Link to="/" >Inicio</Link></MenubarItem>
              <MenubarItem><Link to="/Productos" >Productos</Link></MenubarItem>
              <MenubarItem><Link to="/AboutUs" >Nosotros</Link></MenubarItem>
              <MenubarItem><Link to="/Contact" >Contacto</Link></MenubarItem>
              <MenubarItem><Link to="/Login" >Login</Link></MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav >
  )
}