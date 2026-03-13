import {
	Menubar,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar"
import { useStore } from "@/lib/store/useStore"
import { Input } from "../ui/input";

export default function NavBarProduct() {
	const search = useStore(state => state.search);
	const setSearch = useStore(state => state.setSearch);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);
	}

	const { logged } = useStore();
	return <nav className="fixed w-full flex justify-end mt-4 mr-4">
		<Input className="w-64 text-black" value={search} onChange={handleSearch} placeholder="buscar productos" />
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Editar</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarItem className="hover:bg-violet-500" disabled={!logged}>
							Agregar Producto
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