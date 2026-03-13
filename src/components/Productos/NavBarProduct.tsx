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
import { useStore } from "@/lib/store/useStore"


export default function NavBarProduct() {
	const { logged } = useStore();
	return <nav className="fixed mt-4 ml-4">
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Editar</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarItem disabled={!logged}>
							Nuevo Producto
						</MenubarItem>
					</MenubarGroup>
					<MenubarGroup>
						<MenubarItem disabled={!logged}>
							Editar Existente
						</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	</nav>
}