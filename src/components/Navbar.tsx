import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function () {
  return (
    <Menubar className="bg-violet-700 h-10 hidden sm:block">
      <MenubarMenu>
        <MenubarTrigger>
          Productos
        </MenubarTrigger>
        <MenubarContent className="bg-violet-300">
          algo
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}