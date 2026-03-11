import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Navbar() {
  return (
    <nav className="flex">
      <Menubar className="bg-violet-700 h-10 hidden sm:flex">
        <MenubarMenu>
          <MenubarTrigger>
            Productos
          </MenubarTrigger>
          <MenubarContent className="bg-violet-300">
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  Bebidas
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>
                    Coke
                  </MenubarItem>
                  <MenubarItem>
                    Agua
                  </MenubarItem>
                  <MenubarItem>
                    Leche
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="https://youtube.com/">youtube</a>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </nav>
  )
}