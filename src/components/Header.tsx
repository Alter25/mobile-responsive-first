import Navbar from "./Navbar";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto border border-slate-200 rounded-2xl px-6 py-3 sm:px-3 flex justify-center w-full bg-white z-10">
      <div className=" w-screen">
        <div className="flex justify-between">
          {/* logo */}
          <div className="w-fit px-1 ml-2 h-10 bg-linear-to-br bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg"><Link to={"/"}>Emma</Link></span>
          </div>
          <div className="mr-4">
            <Navbar />
          </div>
          <div className="hidden sm:flex m-auto">
            <nav>
              <ol className="flex gap-4">
                <li><Link to={"/"} />Inicio</li>
                <li><Link to={"/Productos"} />Productos</li>
                <li><Link to={"/AboutUs"} />Nosotros</li>
                <li><Link to={"/Contact"} />Contacto</li>
              </ol>
            </nav>
          </div>
          <div>

          </div>
        </div>
      </div>
    </header>
  );
};