import {
	Menubar,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar"
import { useStore } from "@/lib/store/useStore"


export default function NavBarProduct() {
	const { logged } = useStore();
	return <nav className="fixed w-full flex justify-end mt-4 mr-4">
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Editar</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarItem className="hover:bg-violet-500" disabled={!logged}>
							Nuevo Producto
						</MenubarItem>
					</MenubarGroup>
					<MenubarGroup>
						<MenubarItem className="hover:bg-violet-500" disabled={!logged}>
							Editar Existente
						</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	</nav>
}