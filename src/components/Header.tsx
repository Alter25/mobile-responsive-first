import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto border border-slate-200 rounded-2xl px-6 py-3 sm:px-3 flex justify-center w-full bg-white z-10">
      <div className=" w-screen">
        <div className="w-screen flex justify-between items-center">
          <div className="w-fit px-1 ml-2 h-10 bg-linear-to-br rounded-lg flex items-center justify-center bg-indigo-400">
            <span className="text-primary font-bold text-lg">Emma</span>
          </div>
          <div>
            <NavbarButton />
          </div>
          <div className="hidden sm:flex mx-auto">
            <nav className="flex justify-between w-full">
              <ol className="flex items-center justify-around gap-8 w-full">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/AboutUs">Nosotros</Link></li>
                <li><Link to="/Contact">Contacto</Link></li>
              </ol>
            </nav>
            <div className="hidden md:flex"><Button><Link to="/Login">Login</Link></Button></div>
          </div>
        </div>
      </div>
    </header>
  );
};