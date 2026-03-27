import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useStore } from "@/lib/store/useStore";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "@/services/authServices";

export const Header = () => {
  const isLogged = useStore(s => s.isLogged);
  const shiftLogged = useStore(s => s.shiftLogged);
  const handleLogout = () => {
    logout();
    shiftLogged();
  }
  return (
    <header className=" mx-auto shadow-2xl rounded-2xl px-2 py-3 sm:px-2 flex w-full bg-white z-10 max-w-screen-2xl">
      <div className="w-full">
        <div className="w-full px-2 flex justify-between items-center">
          <div className="w-fit px-1 h-10 bg-linear-to-br rounded-lg flex items-center justify-center bg-indigo-400">
            <span className="text-primary font-medium text-xl">Emma</span>
          </div>
          <NavbarButton />
          <div className="hidden sm:justify-between sm:flex gap-8">
            <nav className="flex justify-between">
              <ol className="flex items-center justify-around gap-8 w-full">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/AboutUs">Nosotros</Link></li>
                <li><Link to="/Contact">Contacto</Link></li>
              </ol>
            </nav>
          </div>
          <div className="hidden items-end md:flex">
            {
              isLogged === true ? <div className="flex items-center">
                <FaRegUserCircle size={32} className="mr-2" />
                <Button onClick={handleLogout}>Logout</Button>
              </div> :
                <Button><Link to="/Login">Login</Link></Button>
            }
          </div>
        </div>
      </div>
    </header>
  );
};