import Navbar from "./Navbar";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed px-2 sm:px-3 py-2 flex justify-center w-full mt-2 bg-blue-600 z-10">
      <div className=" w-screen">
        <div className="flex justify-between">
          {/* logo */}
          <div className="w-fit px-1 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Emma</span>
          </div>
          <div className="m-auto">
            <Navbar />
          </div>
          <Button className="sm:hidden">login</Button>
        </div>
      </div>
    </header>
  );
};