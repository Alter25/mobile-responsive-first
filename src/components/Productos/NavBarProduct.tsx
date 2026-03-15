import { FiEdit } from "react-icons/fi";
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
	return <nav className=" w-full flex justify-end p-4 mt-4 mr-4">
		<div className="flex w-full justify-start ml-4 items-center">
			<label htmlFor="buscar">Buscar Producto: </label>
			<Input id="buscar" className="w-64 text-black mx-4" value={search} onChange={handleSearch} placeholder="buscar productos" />
		</div>
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger><FiEdit /></MenubarTrigger>
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